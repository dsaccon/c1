
## Setting up the frontend

To configure the frontend, you'll need to build your docker container for `c1_frontend` and install npm modules locally. The `c1_frontend` folder should be mounted inside the container so if you edit anything, it will change in real time. The below commands should work

```
cd c1_frontend
npm i 
cd ..
docker-compose build c1_frontend
```

## setting up the backend


## Tips

Create an alias from `docker-compose` to `dc`. Add this to your `.bashrc
```
alias dc='docker-compose'
```


## Installation
Install npm

Install yarn from npm
```bash
sudo npm i -g yarn
```

## Usage
```bash
cd corrosion-one/
yarn
```

### For development
```bash
yarn start
```
### For deploy
```bash
yarn build
```
Then serve build folder (corrosion-one/build)
