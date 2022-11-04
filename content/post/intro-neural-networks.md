---
title: "Introduction to Neural Networks"
date: 2022-11-03T18:31:18-04:00
draft: false
tags: ['Machine Learning']
categories: ['machine learning', 'neural networks']
---

> This is a required blog post for [CSCI-UA 473 Introduction to Machine Learning Fall 2022](https://nyu-robot-learning.github.io/ml-class/) at NYU. \
> The audience is expected to have basic background knowledge of [Perceptron](https://en.wikipedia.org/wiki/Perceptron).

# What are Neural Networks
**Neural Networks** are networks of **Perceptrons**.  
This is a **Perceptron**:  
![perceptron.png](https://s2.loli.net/2022/11/04/VOfolhbu814TEim.png) \
It will be a unit in a **Neural Network** (marked with red):  
![nn.png](https://s2.loli.net/2022/11/04/wPsySgj2LFARVJb.png)  

# Why having Neural Networks
**Neural Networks** can solve non-linear separatable problems that cannot be solved by linear models. \
For example, a classification problem of this dataset: \
![dataset.png](https://s2.loli.net/2022/11/04/gzxJjCDOEaqf2FV.png)  

If we want to solve this classification problem, we must manually observe the dataset and then apply feature transformations. \
For example like this: \
![linear_transformation.png](https://s2.loli.net/2022/11/04/fClGrpgL7yi8hSK.png)  

**Neural Networks** can learn these non-linear feature transformations, so that we don't have to design them by hand.  

## Activation Functions
The capability of **Neural Networks** to solve non-linear problems comes from the **activation functions**, which is applied after the **linear combination** step of each node.  

Because a Neural Network learns through **gradient descent** (we will cover this in the following sections), an ideal **activation function** should be deferentiable and computationally efficient. \
Some widely used **activation functions** are: \
![image.png](https://s2.loli.net/2022/11/04/DV7bFigsL1jTH6W.png)  

### ReLU
You might have noticed that **ReLU** is not differentiable at **0**, but this does not matter because the chance of getting an exact **0** as the input to **ReLU** is very rare. Even if this happens, we can handle this case by replacing the input with another random value. This does not affect the performance much. \
In fact, to the best of my knowledge, **ReLU** is the most widely used activation function nowadays because it is the most computationally efficient. \
There are some other activation functions built on top of **ReLU**, like [**Leaky ReLU**](https://paperswithcode.com/method/leaky-relu)  

### Sigmoid
Sigmoid is also very commonly used, because its derivitive is very simple: \
$$ \frac{d \ sigmoid(x)}{dx} = \frac{d}{dx} \frac{1}{1 + e^{-x}} $$
$$ \frac{0 \times (1 - e^{-x}) - (-e^{-x})}{(1 + e^{-x})^2} $$
$$ \frac{1}{1 + e^{-x}} (\frac{e^{-x}}{1 + e^{-x}}) $$
$$ \frac{1}{1 + e^{-x}} (1 - \frac{1}{1 + e^{-x}}) $$
$$ sigmoid(x)(1 - sigmoid(x)) $$

## Deep Neural Network

By having more layers of neural networks, we apply the **activation functions** for more number of times, which gives us more non-linearity. \
In practice, a neural network consisting of multiple layers is called a **"Deep Neural Network"**. This is where the term **Deep Learning** comes from. \
![deep learning.png](https://s2.loli.net/2022/11/04/V427GQiLlECDovq.png)  
All the other layers except the input (left-most in the graph) and the output layer (right-most layer) are called "**hidden layers**".  

# An example: XOR
Let's walk through an example of how to train a neural network to learn the `XOR` logic. \
Since `XOR` is a **non-linear** logic, it fits neural networks well. \
`XOR`: \
![xor.png](https://s2.loli.net/2022/11/04/BjyzPAkHQ6LwYJp.png)  

We are going to use this following neural network, where the two blue numbers on the first layer are the input values, the last number **1** is the bias term, and the numbers on the edges are the weights (pre-initialized). \
Suppose the activation function we use is **sigmoid**. \
![xor_net.png](https://s2.loli.net/2022/11/04/9JtAoaTzSyIQ4l6.png)

## Forward pass
**Forward pass** is the process of going from the input layer to the final output layer to calculate the output.  

The result (output) for the first node on the second layer will be: \
$$ sigmoid(1.0 \times 3.7 + 0.0 \times 3.7 + 1 \times -1.5) = sigmoid(2.2) = \frac{1}{1 + e^{-2.2}} = 0.90 $$

Similarly, the result for the second node will be: \
$$ sigmoid(1.0 \times 2.9 + 0.0 \times 2.9 + 1 \times -4.5) = sigmoid(-1.6) = \frac{1}{1 + e^{1.6}} = 0.17 $$

Finally, the output will be: \
$$ sigmoid(0.90 \times 4.5 + 0.17 \times -5.2 + 1 \times -2.0) = sigmoid(1.17) = \frac{1}{1 + e^{-1.17}} = 0.76 $$

The result approximates **1**, as it is the output we expect when the input is `1` and `0`. 

## Backward pass
We noticed that the output from our current neural network is **0.76**, but not exactly what we expect (**1**). \
If we want to optimize our neural network so that the output will be closer to what we expect, we need to update the weights using **gradient descent**. \
The process of updating the weights of each layer starting from the last layer to the first layer is called **backward pass**. \
![gd.png](https://s2.loli.net/2022/11/04/wiytEbMHKBsFGcJ.png)  
Suppose the loss function we are using is: \
$$ E = \frac{1}{2}(t - y)^2 $$ \
The derivitive of error with regard to one weight $w_k$ is: \
$$ \frac{dE}{dy} \frac{dy}{ds} \frac{ds}{dw_k} $$ \
(because of the chain rule) \
where \
$$ \frac{dE}{dy} = \frac{d}{dy} \frac{1}{2}(t - y)^2 = -(t-y) $$ \
$$ \frac{dy}{ds} = \frac{d \ digmoid(s)}{ds} = sigmoid(s)(1 - sigmoid(s)) = y(1 - y) $$ \
$$ \frac{ds}{dw_k} = \frac{d}{dw_k}\sum_k w_k h_k = h_k $$

Thus $\frac{dE}{dw_k} = -(t - y) \ y(1 - y) h_k $ \
We can thus update the weights using this equation: \
$ w_k \leftarrow w_k + \alpha(t - y) \ y(1 - y) h_k $ where $\alpha$ is the learning rate.  

Backward pass for the example above: \
![backward_pass.png](https://s2.loli.net/2022/11/04/E9uQzxc5eqajFKG.png)  
After the backward pass for the entire network is done, we will get a better result (output) for the next forward pass because the error is reduced. 

# Reference
- [NYU CSCI-UA 473 Introduction to Machine Learning Fall 2022 Lecture 16 slides](https://www.dropbox.com/s/od8jo0wfbp25ev8/%5BLecture%2016%5D%20Neural%20Networks.pdf?dl=0)