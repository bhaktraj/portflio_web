from flask import Flask ,render_template , request ,session,redirect
app = Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")
@app.route('/dashboard')
def dashboard():
    return render_template("dashboard.html")
app.run(debug=True)
