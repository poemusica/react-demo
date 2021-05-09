###################################################
# This file shows you how to create a web app 
# using Flask for the backend 
# and React for the frontend.
###################################################
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

###################################################
# First, we list any routes that we'll for AJAX requests.
# These routes will return JSON.
# Since we want React to do most of the frontend work,
# we'll mainly be using our Flask app as an API!
@app.route('/compliments.json')
def send_compliments():
    compliments = {1: "cute", 2: "funny", 3:"smart"}
    return jsonify(compliments)

@app.route('/details.json')
def send_details():
    num = request.args.get("id")
    if num:
        num = int(num)
    print("*"*20)
    print(num)
    compliments = {1: "appealing and delightful; charming", 
                   2: "causing amusement or laughter; amusing; comical", 
                   3: "having or showing quick intelligence or ready mental capability"}
    details = compliments.get(num)
    print(details)
    return jsonify(details)

###################################################
# Our Flask app only has one route that renders HTML.
# React Router handles the rest of the route logic for us instead of Flask
# so that we can have a single-page app with no page refreshes.
# The logic below makes sure that our app displays main.html 
# no matter which url the user used to get to our site.
# For more information about the Flask routing rules used below, see...
# https://flask.palletsprojects.com/en/1.1.x/api/#url-route-registrations
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('main.html')

###################################################
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')