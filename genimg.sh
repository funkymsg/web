#!/bin/bash

for img in $(ls s/img); do
    echo "<input type='radio' name='img' id='$img' value='$img'>"
    echo "<label for='$img'><img src='/img/$img' alt=''></label>"
done