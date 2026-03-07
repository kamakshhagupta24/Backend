#!/bin/bash
echo "Enter your name:"
read name

echo "Enter your age:"
read age

if [ $age -ge 18 ]
then
echo "Hello $name, you are an adult"
else
echo "Hello $name, you are a minor"
fi