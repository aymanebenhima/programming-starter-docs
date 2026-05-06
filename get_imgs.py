import urllib.request, re
try:
    html = urllib.request.urlopen('https://www.youcode.ma/').read().decode('utf-8')
    imgs = re.findall(r'<img[^>]+src=\"([^\"]+)\"', html)
    print("\n".join(imgs))
except Exception as e:
    print("Error:", e)
