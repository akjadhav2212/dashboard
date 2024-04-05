## Live Product Analysis

# Installation
docker build -t saasdash .

docker run -d -e PORT=3000 -e MONGO_DB_URI="mongodb+srv://akjadhav2212:Aakash2212@cluster0.qhmsgk5.mongodb.net/dashboard" -e JWT_SECRET="ITISECRET" -p 3000:3000 saasdash