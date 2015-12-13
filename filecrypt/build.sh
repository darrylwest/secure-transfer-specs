#!/bin/sh
# dpw@seattle.local
# 2015.12.13
#

go get github.com/gokyle/readpass github.com/kisom/filecrypt/archive github.com/kisom/filecrypt/crypto

go build -o ~/bin/filecrypt filecrypt.go

~/bin/filecrypt -h
