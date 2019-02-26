#!/bin/bash

for img in $(ls img); do
    echo "<input type='radio' name='img' id='$img' value='$img'>"
    echo "<label for='$img'><img src='$img' alt=''></label>"
done