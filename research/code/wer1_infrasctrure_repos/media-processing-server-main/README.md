# WeR1 Media Processing Server

![main](https://github.com/WeR1Hub/media-processing-server/actions/workflows/main-lint-and-tests.yml/badge.svg)

Based on Inves Technology | Hello World template

- Koa + Nodemon for easy local testing & hot reloads
- Lambda specific Koa config (plus examples of how do do binary files in Lambda)
- Eslint + Prettier Config
- .nvmrc for pegging nvm level
- tsconfig.json & webpack.config
- Seperation of Dev & Prod config & deployments
- Dockerfile & docker-compose for doing local Docker dev
- Logger & Config added to Koa context

## Usage

To run:

```sh
# Docker
make build up
doppler setup
make run
```

To deploy

```sh
# Locally (Prerequisites: Terraform > 1.2.2)
make init
make env=dev deploy
# Docker
make up
make env=dev deploy
```

## Updating Image (Needs Docker and AWS CLI installed)
1. Login to ECR
```bash
aws sso login --profile wer1-dev
aws ecr get-login-password --profile wer1-dev --region eu-west-1 | docker login --username AWS --password-stdin 976284867583.dkr.ecr.eu-west-1.amazonaws.com/<image_name:tag>
```
2. Generate build artefact
```bash
pnpm compile_ts
```
3. Build image with new sources
```bash
docker build --platform linux/amd64 -t media-processing-server:latest .

```
4. Tag the image for version control in ECR (use semver)
```bash
docker tag media-processing-server:latest 976284867583.dkr.ecr.eu-west-1.amazonaws.com/media-processing-server:latest

```
5. Push image
```bash
docker push 976284867583.dkr.ecr.eu-west-1.amazonaws.com/media-processing-server:latest
```

## Notes

pnpm seems to get confused with the way we do virtual docker volumes for node_modules. We use this to isolate local node_modules from the alpine ones in Docker. But for some reason pnpm thinks it has to remove and reinstall node_modules whenever you run inside docker. It doesn't cause problems so far, so we will just continue prompting `y` in this scenario. This is only relevant of you use the docker dev image.

```sh
✔ The modules directory at "/wer1-graph/source/node_modules" will be removed and reinstalled from scratch. Proceed? (Y/n) · true
```

## Deployment

1. Login to AWS with SSO:

```bash
aws sso login --profile wer1-dev
```

2. Login to ECR

```bash
aws ecr get-login-password --profile wer1-dev --region eu-west-1 | docker login --username AWS --password-stdin 976284867583.dkr.ecr.eu-west-1.amazonaws.com
```

3. Build the Docker image

```bash
docker buildx build --platform linux/amd64 -t media-processing-server:latest .
```

6. Tag the image

```bash
docker tag media-processing-server:latest 976284867583.dkr.ecr.eu-west-1.amazonaws.com/media-processing-server:latest
```

7. Push the image to ECR

```bash
docker push 976284867583.dkr.ecr.eu-west-1.amazonaws.com/media-processing-server:latest
```

8. Ensure you have Tailscale (VPN) setup so we can route traffic from local machine to kubernetes cluster without the need of a bastion

9. Perform any Kubernetes action e.g

```bash
- kubectl get po -A
- kubectl logs -f <deployment>
- kubectl edit deploy <deployment>
- kubectl exec -it <deployment> -- bash (Drops you in a bash shell of the deployment)
- kubectl get <ingress> -oyaml > ingress.yaml
- kubectl delete ingress <ingress>
- kubectl get certs
- kubectl apply -f ingress.yaml
- kubectl get ing
- kubens demo
- kubectl get nodes
- kubectl get nodes -owide
- kubectl get pvc -A
- kubectl get pv
- kubectl get deploy
- kubectl edit deploy <deploy> 
- kubectl get po -n cluster-system
- kubectl get pvc
- kubectl logs -f <resource>
- kubectl get ing -A
```

## Updating server image
```bash
1. Login to ECR
aws ecr get-login-password --profile wer1-dev --region eu-west-1 | docker login --username AWS --password-stdin 976284867583.dkr.ecr.eu-west-1.amazonaws.com
2. Build the image
docker buildx build --platform linux/amd64 -t media-processing-server:latest .
3. Tag the image
docker tag media-processing-server:latest 976284867583.dkr.ecr.eu-west-1.amazonaws.com/media-processing-server:latest
4. Push image
docker push 976284867583.dkr.ecr.eu-west-1.amazonaws.com/media-processing-server:latest
```