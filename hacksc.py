import argparse
import io
import re
import os


google_cerd = input("enter google credentials")
image_url = input("enter image file path")
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = google_cerd

def detect_faces(path):
    """Detects faces in an image."""
    from google.cloud import vision
    client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    response = client.face_detection(image=image)
    faces = response.face_annotations

    return faces[0].joy_likelihood

print(detect_faces(image_url))
