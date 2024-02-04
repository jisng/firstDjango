import json
from django.http import JsonResponse
from django.template.response import TemplateResponse
from django.shortcuts import render, HttpResponse, redirect

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View

def index(request):
    return TemplateResponse(request, "index.html")


@method_decorator(csrf_exempt, name = "dispatch")
class BaseView(View):

    json_string = ""

    def post(self, request):
        body = request.POST['body']
        dictString = json.loads(body)
        BaseView.json_string = dictString
        return JsonResponse(BaseView.json_string)

def get(request):
    return JsonResponse(BaseView.json_string)
