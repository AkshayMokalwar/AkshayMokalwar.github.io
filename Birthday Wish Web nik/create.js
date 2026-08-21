// 1. Apni UPI Details yaha update karein:
const YOUR_UPI_ID = "aamokalwar-1@oksbi"; // Replace with your actual UPI ID (e.g. 9876543210@ybl)
const YOUR_NAME = "Akshay Mokalwar";

// 2. Free Image Upload API Key (Get free key from https://api.imgbb.com/)
const IMGBB_API_KEY = "YOUR_IMGBB_API_KEY"; 

// 3. Google Apps Script Web App URL (Follow Step 4 below)
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

let selectedAmount = 10;

document.addEventListener('DOMContentLoaded', () => {
    updateQrCode(selectedAmount);

    // Amount Selection Toggle
    const amtBtns = document.querySelectorAll('.amt-btn');
    amtBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            amtBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            selectedAmount = e.target.getAttribute('data-amt');
            updateQrCode(selectedAmount);
        });
    });

    // Form Submission
    document.getElementById('birthday-form').addEventListener('submit', handleFormSubmit);
});

// Dynamic UPI QR Code Generator
function updateQrCode(amount) {
    const upiUrl = `upi://pay?pa=${YOUR_UPI_ID}&pn=${encodeURIComponent(YOUR_NAME)}&am=${amount}&cu=INR`;
    const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;
    document.getElementById('upiQrCode').src = qrApi;
}

// Upload Single Image to ImgBB
async function uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    return result.data ? result.data.url : null;
}

// Handle Form Submission
async function handleFormSubmit(e) {
    e.preventDefault();
    const status = document.getElementById('statusMessage');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.disabled = true;
    status.style.color = '#66fcf1';
    status.innerText = 'Uploading images and scheduling surprise... Please wait!';

    try {
        // Upload Selected Images
        const fileInput = document.getElementById('imageFiles');
        const files = Array.from(fileInput.files);
        
        if (files.length < 2 || files.length > 5) {
            alert('Please select between 2 to 5 images.');
            submitBtn.disabled = false;
            return;
        }

        const imageUrls = [];
        for (const file of files) {
            const url = await uploadImage(file);
            if (url) imageUrls.push(url);
        }

        // Generate Custom Page Shareable Link
        const personName = document.getElementById('personName').value.trim();
        const generatedWishUrl = `https://AkshayMokalwar.github.io/Birthday%20Wish%20Web%202/index.html?name=${encodeURIComponent(personName)}`;

        // Prepare Payload
        const payload = {
            personName: personName,
            birthDate: document.getElementById('birthDate').value,
            scheduleTime: document.getElementById('scheduleTime').value,
            recipientPhone: document.getElementById('recipientPhone').value.trim(),
            customWish: document.getElementById('customWish').value.trim(),
            imageUrls: imageUrls.join(','),
            amountPaid: selectedAmount,
            utrNumber: document.getElementById('utrNumber').value.trim(),
            generatedWishUrl: generatedWishUrl,
            status: 'PENDING_VERIFICATION' // Admin checks UTR and changes to APPROVED
        };

        // Send to Google Sheet
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        status.style.color = '#2ecc71';
        status.innerText = '✅ Birthday wish scheduled successfully! We will deliver it on WhatsApp once payment UTR is verified.';
        document.getElementById('birthday-form').reset();
    } catch (err) {
        console.error(err);
        status.style.color = '#ff007f';
        status.innerText = '❌ Failed to submit. Please try again.';
    } finally {
        submitBtn.disabled = false;
    }
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.personName,
    data.birthDate,
    data.scheduleTime,
    data.recipientPhone,
    data.customWish,
    data.imageUrls,
    data.amountPaid,
    data.utrNumber,
    data.generatedWishUrl,
    data.status // PENDING_VERIFICATION
  ]);
  
  return ContentService.createTextOutput("Success");
}

// Scheduled Trigger Function (Runs every hour / at 12:00 AM)
function checkAndSendWhatsAppWishes() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  var today = Utilities.formatDate(new Date(), "GMT+5:30", "yyyy-MM-dd");
  
  for (var i = 1; i < rows.length; i++) {
    var birthDate = Utilities.formatDate(new Date(rows[i][1]), "GMT+5:30", "yyyy-MM-dd");
    var recipientPhone = rows[i][3];
    var wishUrl = rows[i][8];
    var status = rows[i][9]; // Check if APPROVED by admin
    
    // Check if Today == Birthday AND Payment Status is APPROVED
    if (today === birthDate && status === "APPROVED") {
      sendWhatsAppMessage(recipientPhone, wishUrl, rows[i][0]);
      sheet.getRange(i + 1, 10).setValue("DELIVERED"); // Mark Delivered
    }
  }
}

function sendWhatsAppMessage(phone, url, name) {
  // Free WhatsApp API integration (e.g., Green-API / UltraMsg)
  var instanceId = "YOUR_INSTANCE_ID";
  var apiToken = "YOUR_API_TOKEN";
  
  var payload = {
    "chatId": phone + "@c.us",
    "message": "🎉 Happy Birthday " + name + "! 🎂 You have a special birthday surprise awaiting you! View it here: " + url
  };
  
  UrlFetchApp.fetch("https://api.green-api.com/waInstance" + instanceId + "/sendMessage/" + apiToken, {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  });
}