#!/bin/bash

for img in $(ls s/img); do
    echo "convert s/img/$img -resize x90 s/img/$img > /dev/null"
    # echo "<input required type='radio' name='img' id='$img' value='$img'>"
    # echo "<label for='$img'><img src='/img/$img' alt=''></label>"
done