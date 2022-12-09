FROM gradle:jdk11

RUN set -ex && \
    apt update && \
    apt --no-install-recommends --yes install \
        make \
        git

RUN set -ex && adduser --system --group --disabled-password seednode && \
    mkdir -p /home/seednode && \
    chown -R seednode:seednode /home/seednode

USER seednode

RUN set -ex && git clone --recursive https://github.com/haveno-dex/haveno-pricenode.git /home/seednode

WORKDIR /home/seednode

RUN gradle clean build -x test

ENTRYPOINT [ "./haveno-seednode" ]
