#!/bin/sh

# generate imports for haveno services and types using grpc-web
mkdir -p ./src/protobuf
cd ./src/protobuf || exit 1
mkdir -p ./src_dir
wget https://raw.githubusercontent.com/haveno-dex/haveno/master/proto/src/main/proto/grpc.proto -O src_dir/grpc.proto -P ./src_dir
wget https://raw.githubusercontent.com/haveno-dex/haveno/master/proto/src/main/proto/pb.proto -O src_dir/pb.proto -P ./src_dir
protoc -I=./src_dir/ ./src_dir/*.proto --js_out=import_style=commonjs,binary:./ --grpc-web_out=import_style=typescript,mode=grpcwebtext:./ || exit 1
