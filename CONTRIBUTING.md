We the CSE batch 2021-25 of IIIT Bhubaneswar are open to, and grateful for any contributions made by the community to help develop this site. Please go through this document once before you contribute or open a pull request.

# Setup

## Frontend

1. Open the frontend folder in cmd
2. Install everything using `npm install`
3. Start using `npm run start`

## Backend

1. Open the frontend folder in cmd
2. Install everything using `npm install`
3. Build the frontend site using `npm run build`
4. Open the backend folder in cmd
5. Install everything using `npm install`
6. Create the [config.env](#configenv-file) file
7. Start using `npm run start`

## config.env file

Path: `backend/config/config.env`

Content:

```
PORT = 4000
FRONTEND = http://localhost:4000
MONGO_URI = mongodb://localhost:27017/google
GOOGLE_CLIENT_ID = xxx-xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET = xxx-xxxxx
CALLBACK_URL = /api/auth/google/callback
```

Get the google client id and secret from [here](https://console.cloud.google.com/apis/credentials) by setting the authorized javascript origins as `http://localhost:4000` and authorized redirect uri as `http://localhost:4000/api/auth/google/callback`

# Submission

Open a pull request with your changes describing in the best possible way what you have done.
