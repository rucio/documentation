#!/bin/bash

cd `dirname $0`
for i in {0..8} ; do ./qt-00${i}-* ; done
