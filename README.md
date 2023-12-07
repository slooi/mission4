# Context

(this is coursework)
Create a website which allows users to upload images of cars to find similar car using Microsoft Azure's Vision Api. This project uses the Image Tagging service Azure provides. I also must integrate mongodb and a cli tool to allow for seeding of the database 

# Technology Stack


- **Language**: TypeScript
- **Server Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Command Line Interface (CLI)**: Commander
- **Environment Variable Management**: Dotenv
- **API Routing and Handling**: Express.js
- **File Upload Handling**: Multer
- **Validation Schema**: Zod
- **Typescript JIT Runner**: tsx


# Setup
- The following steps assumes you are deploying to a cloud provider with publicly accessible IP address.
	- This is because azure's vision tag api requires you to specify a **public url** to GET the images from 

1) Clone this repo:

```
git clone https://github.com/slooi/mission4.git
```

2) Navigate into the repo
```
cd mission4
```

3) Install dependencies:
```
npm i
```

4)
Create `.env` in the base of this repo with the following variables (navigate to the **Resources** section to find out how to get an azure key):

```
AZURE_KEY=<YOUR_KEY>
SERVER_IP_N_SCHEME=<SCHEME><YOUR_IP>
```
For example:
```
AZURE_KEY=101c7004sdfsj3o9sdfkj312na9123a01231
SERVER_IP_N_SCHEME=http://118.133.121.111
```
5) Create a `userUploads` folder for user uploaded images:
```
mkdir ./src/client/public/userUploads
```
6) Prepare to see dummy images. Dummy images are located in `./src/client/public/userUploads`. If they do not exist seeding will NOT work properly. Seed images by running:
```
tsx src/server/cli.ts seed
```
7) Open port `80` for your network/vps on your vps provider's dashboard. Otherwise azure will NOT be able to GET images

8) Redirect traffic to port `8000` from port `80`:
```
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8000
```

8) Run the server:
```
npm run dev-server
```

# cli
Below are the cli commands to interact with mongodb

- seed
```
tsx src/server/cli.ts seed
```


# Resources

Here are some resources which I found most helpful for this project:

- https://portal.vision.cognitive.azure.com/demo/generic-image-tagging
- https://centraluseuap.dev.cognitive.microsoft.com/docs/services/unified-vision-apis-public-preview-2023-02-01-preview/operations/61d65934cd35050c20f73ab6
- https://centraluseuap.dev.cognitive.microsoft.com/docs/services/unified-vision-apis-public-preview-2023-02-01-preview/operations/61d65934cd35050c20f73ab6/console