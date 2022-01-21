package com.shortened.demo.designmodel.converter;

import java.time.Instant;
import java.util.Map;

public class ConvertImpB implements ConverterInterface {

    @Override
    public Instant convert(Instant initial, Map<String, Object> context) {
        return initial.plusSeconds(200);
    }
}
