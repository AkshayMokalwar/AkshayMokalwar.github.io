# created urls

from django.urls import path
from qna import views

urlpatterns = [

	# path('home/',views.homeakview),
	path('home/',views.home_view),
	path('ques/<int:qid>/',views.ques_view),
	path('registration/',views.registration_view)


]
