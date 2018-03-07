# -*- coding: utf-8 -*-
"""
    web calculate
    A simple Calculator made by Django and jQuery.
    @author： viola
    @Date： 2018-3-5

"""

from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, 'cal.html')


def calculate(request):
    counter = request.GET['counter']
    result = eval(str(counter))
    return HttpResponse(str(result))