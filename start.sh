#!/usr/bin/bash
STRING="Starting gvc projects"
echo $STRING

make backend&
make frontend&

wait
