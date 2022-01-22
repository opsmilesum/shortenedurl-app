package com.shortened.demo.designmodel.enums;

public enum Enum {
  CAT {
    @Override
    public void say() {
      System.out.println("miao");
    }
  },

  DOG {
    @Override
    public void say() {
      System.out.println("wan");
    }
  };

  public abstract void say();
}
