FROM base/devel
MAINTAINER Rich Daley <rich@fishpercolator.co.uk>
ENV REFRESHED_AT 2017-10-18

ENV APPDIR /usr/src/fpsite
RUN mkdir $APPDIR
WORKDIR $APPDIR

RUN pacman -Sy --noconfirm yarn nginx

RUN rm -rf /usr/share/nginx/html/
RUN ln -s $APPDIR/dist /usr/share/nginx/html

ADD package.json yarn.lock $APPDIR/
RUN yarn

ADD . $APPDIR/
RUN yarn run generate

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
