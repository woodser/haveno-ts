#!/bin/sh

# generate imports for haveno services and types using grpc-web
mkdir -p ./src/protobuf
cd ./src/protobuf || exit 1
protoc -I=../../../grpc-web/net/grpc/gateway/examples/helloworld/ ../../../grpc-web/net/grpc/gateway/examples/helloworld/*.proto --js_out=import_style=commonjs,binary:./ --grpc-web_out=import_style=typescript,mode=grpcwebtext:./ || exit 1

# run typescript compiler
tsc

# copy protobuf models to dist
cp ./helloworld_pb.d.ts ../../dist/protobuf/helloworld_pb.d.ts || exit 1
cp ./helloworld_pb.js ../../dist/protobuf/helloworld_pb.js || exit 1
