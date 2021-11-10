---
title: "Union Find with 'Move' Operation"
date: 2021-11-09T21:47:56-05:00
draft: true
tags: ['Union Find']
categories: ['algorithms', 'data structures']
---

> This post assumes that you are familiar with the [Union Find (Disjoint Set)](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) data structure.

## Problem statement

In addition to the `union` and `find` operations of a normal Union Find, we also need to be able to `move` an element from one set to another.

For exmaple:  
If the intial sets in our Union Find are:

```
{1}, {2}, {3}, {4}, {5}
```

After performing the following `union` operations:

-   `union(1, 2)`
-   `union(3, 4)`
-   `union(3, 5)`

The sets are now:

```
{1, 2}, {3, 4, 5}
```

There are two sets in total (`{1, 2}` and `{3, 4, 5}`).

Now, if we perform `move(4, 1)`, meaning moveing element `4` from its set to the set containing `1`, we get:

```
{1, 2, 4}, {3, 5}
```

## Edge cases

You might think by setting the `parent` of the element being moved to its target element, the problem is solved.  
However, consider this edge case:

```
{1}, {2}, {3}
```

After `union(1, 2)`:

```
 {1} |
 /   |  {3}
{2}  |
```

Meaning that the parent of `2` is now `1` (The sets are now `{1, 2}, {3}`).

Now, if we `move(1, 3)` by setting the root of `1` to `3` directly, we get:

```
    {3}
    /
   {1}
   /
 {2}
```

Becasue by setting the parent of `1` to `3`, we also move all the children of `1` (namely, `2`) to `3` .

## Solution

The core idea to solve this problem is: we want to make sure we never `move` an element that has children.
To accomplish this, we want to do:

1. Path compression. So that every element in a set will connect to one single parent directly.
2. Dummy root node (will be explained). So that the one single parent node will never be moved during a `move` operation.

### Path compression

sample code for path compression:

```java
public int find(int ii) {
    if (parent[ii] != ii) parent[ii] = find(parent[ii]);
    return parent[ii];
}
```

### Dummy root node

Initially, the parent of every element will be a dummy root node.
When we `move`, we move the element directly from one set to another.
When we `union`, we union the two sets as per normal Union Find.

Example:

```
dummy nodes:     {6}  {7}  {8}  {9}  {10}
                  |    |    |    |    |
normal nodes:    {1}, {2}, {3}, {4}, {5}
```

Here, nodes `6` to `10` are dummy root nodes.
All sets are `{1}, {2}, {3}, {4}, {5}`.

`move(2, 1)`

```
{6}     {7}  {8}  {9}  {10}
 | \          |    |    |
{1} {2}      {3}, {4}, {5}
```

Now, all sets are `{1, 2}, {3}, {4}, {5}`.

`union(3, 4)`

```
{6}     {7}      {9}    {10}
 | \            /  |     |
{1} {2}       {8} {4}   {5}
              /
             {3}
```

Now, all sets are `{1, 2}, {3, 4}, {5}`.
Note that dummy root nodes are always not counted in our set.

`move(3, 2)`

```
{6}_______    {7}    {9}    {10}
 | \      |         /  |     |
{1} {2}  {3}      {8} {4}   {5}
```

Sets are `{1, 2, 3}, {4}, {5}`.

`union(2, 5)` (If we did the merge by rank optimization)

```
{6}_____________     {7}     {9}
 | \      |     |           /  |
{1} {2}  {3}   {10}       {8} {4}
                |
               {5}
```

Sets are `{1, 2, 3, 5}, {4}`

## Acknowledgement

This problem is originated from Problem Set 9 of NYU Algorithmic Problem Solving class (Fall 2021).
