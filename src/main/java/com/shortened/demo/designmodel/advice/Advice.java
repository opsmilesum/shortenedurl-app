package com.shortened.demo.designmodel.advice;

public interface Advice<T> {
  void onEnter();

  void onSuccess(T t);

  void onError(Exception e);
}
