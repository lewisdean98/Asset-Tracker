from multiprocessing import Event
import uuid
import django
from django.shortcuts import render
from django.http import HttpResponse
from django.utils.timezone import now
from numpy import rec
from .models import Asset
from .models import Event
import json


def createEvent(asset_tag) :
    try:
        Event.objects.create(
            id = uuid.uuid1(),
            asset_tag = asset_tag,
            time_stamp = now(),
            ticket = "N/A",
            user = "N/A"
        )
    except Exception as err:
        return(str(err))
    else:
        return("Successfully added event")
    
def addAsset(asset_tag) :
    try:
        Asset.objects.create(
            asset_tag = asset_tag,
            checked_in = True,
            checked_in_count = 1,
            last_checked_in = now(),
            last_checked_out = now()
        )
    except Exception as err:
        return(str(err))
    else:
        return("Successfully added " + asset_tag)

def editAsset(asset_tag) :
    #Check if asset is checked in
    checkedin = Asset.objects.filter(asset_tag=asset_tag)[0].checked_in
    checkedincount = Asset.objects.filter(asset_tag=asset_tag)[0].checked_in_count
    
    try:
        if checkedin:
            Asset.objects.filter(asset_tag=asset_tag).update(
                checked_in = not checkedin,
                last_checked_out = now(),
        )
        else :
            Asset.objects.filter(asset_tag=asset_tag).update(
                checked_in = not checkedin,
                last_checked_in = now(),
                checked_in_count = checkedincount + 1
        )

    except Exception as err:
        return(str(err))

    else:
        if checkedin:
            return("Successfully checked " + asset_tag + " out")
        else:
            return("Successfully checked " + asset_tag + " in")

def scanAsset(request, asset_tag):
    
    print(createEvent(asset_tag))

    #Asset doesn't exist
    if not Asset.objects.filter(asset_tag=asset_tag).exists():
        return HttpResponse(addAsset(asset_tag))
    
    #Asset already exists
    else:
        return HttpResponse(editAsset(asset_tag))

def getHistory(request, asset_tag):

    re = []
    events = Event.objects.filter(asset_tag=asset_tag)

    #Get most recent 5 events
    for i in range(events.__len__() - 10, events.__len__()):

        #Make date more readable
        date_time = events[i].time_stamp
        time_stamp = str(date_time.day) + "/" + str(date_time.month) + "/" + str(date_time.year) + "    " + str(date_time.hour) + ":" + str(date_time.minute) 


        x = {
            "id" : str(events[i].id),
            "time_stamp" : time_stamp
        }

        re.append(x)

    return HttpResponse(json.dumps(re))




