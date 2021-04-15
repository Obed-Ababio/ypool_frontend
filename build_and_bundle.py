import subprocess
import re

# subprocess.run("rm package-lock.json", shell=True, check=True)
# subprocess.run("npm install react-router-dom", shell=True, check=True)
# subprocess.run("npm install", shell=True, check=True)
# # make the build
# subprocess.run("npm run build", shell=True, check=True)

subprocess.run("rm -rf /Users/jaredtruong/Desktop/Spring2021/ypool/git/ypool_backend/flask-server/build", shell=True)
subprocess.run("cp -r build /Users/jaredtruong/Desktop/Spring2021/ypool/git/ypool_backend/flask-server/", shell=True)

# subprocess.run("cp build_welcome/index.html /Users/jaredtruong/Desktop/Spring2021/ypool/git/ypool_backend/flask-server/build/index_welcome.html", shell=True)
# subprocess.run("cp -r build_welcome/* /Users/jaredtruong/Desktop/Spring2021/ypool/git/ypool_backend/flask-server/build/", shell=True)
# subprocess.run("rm -rf deploy", shell=True)

# subprocess.run("mkdir deploy", shell=True, check=True)

# subprocess.run("mkdir deploy/static", shell=True, check=True)
# subprocess.run("mkdir deploy/static/react", shell=True, check=True)
# subprocess.run("mkdir deploy/templates", shell=True, check=True)

# subprocess.run("cp build/index.html deploy/templates/", shell=True, check=True)

# pattern = re.compile("\"\/static\/[0-9a-z./]+\"")
# def replace(match):
#     return "\"{{{{ url_for(\'static\', filename=\'react/{}\') }}}}\"".format(match.group()[9:-1])

# with open('deploy/templates/index.html','r') as file:
#     html_template = file.read()

# html_template = pattern.sub(replace, html_template)
# with open('deploy/templates/index.html','w') as file:
#     file.write(html_template)

# subprocess.run("cp -r build/* deploy/static/react", shell=True, check=True)

# subprocess.run("mv deploy/static/react/static/* deploy/static/react", shell=True, check=True)
# #subprocess.run("mv deploy/static/react/images/* deploy/static/react/", shell=True, check=True)

# subprocess.run("rmdir deploy/static/react/static", shell=True, check=True)
# #subprocess.run("rmdir deploy/static/react/images", shell=True, check=True)

# subprocess.run("rm deploy/static/react/index.html", shell=True, check=True)

# # move templates to the right place 
# subprocess.run("cp deploy/templates/index.html \"/Users/jaredtruong/Desktop/Spring 2021/ypool/swe_ypool/flask-server/templates/\"", shell=True, check=True)
# subprocess.run("cp -r deploy/static/* \"/Users/jaredtruong/Desktop/Spring 2021/ypool/swe_ypool/flask-server/static/\"", shell=True, check=True)

# # upload static to aws 
# subprocess.run("cp s3copy.sh deploy; cd deploy; ./s3copy.sh static s3://ypool-static", shell=True, check=True)







