from django.http import JsonResponse
import json
from django.shortcuts import render, HttpResponse, redirect
from django.template.response import TemplateResponse

from django.views.decorators.csrf import csrf_exempt
from django.views import View

json_string = ""

def index(request):
    return TemplateResponse(request, "index.html")

class BaseView(View):

    @csrf_exempt
    def get(self, request):
        body = request.POST['body']
        dictString = json.loads(body)
        json_string = dictString  # 클래스 변수로 할당
        return JsonResponse(json_string)


    def post(self, request):
        return JsonResponse(json_string)
