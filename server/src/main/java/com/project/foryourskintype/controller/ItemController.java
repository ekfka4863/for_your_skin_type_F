package com.project.foryourskintype.controller;

import com.project.foryourskintype.dto.ItemDto;
import com.project.foryourskintype.dto.ReadItemBrandRequest;
import com.project.foryourskintype.dto.ReadItemSkinTypeRequest;
import com.project.foryourskintype.dto.Result;
import com.project.foryourskintype.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Transactional
@RequiredArgsConstructor
@CrossOrigin("*")
public class ItemController {

    private final ItemService itemService;

    @GetMapping("items") //상품 전체 조회 API
    public Result readAll(){
        List<ItemDto> collect = itemService.findAll()
                .stream()
                .map(i -> new ItemDto(i))
                .collect(Collectors.toList());
        return new Result(collect);
    }

    @GetMapping("items/drjart") // drjart 단순 상품조회 API
    public Result readDrjartItem(){
        List<ItemDto> collect = itemService.findDrItem()
                .stream()
                .map(i -> new ItemDto(i))
                .collect(Collectors.toList());
        return new Result((collect));
    }

    @GetMapping("items/innisfree") // innisfree 단순 상품조회 API
    public Result readInnisfreeItem(){
        List<ItemDto> collect = itemService.findInItem()
                .stream()
                .map(i -> new ItemDto(i))
                .collect(Collectors.toList());
        return new Result((collect));
    }

    @GetMapping("items/sidmool") // sidmool 단순 상품조회 API
    public Result readSidmoolItem(){
        List<ItemDto> collect = itemService.findSiItem()
                .stream()
                .map(i -> new ItemDto(i))
                .collect(Collectors.toList());
        return new Result((collect));
    }

    @GetMapping("items/beplain") // beplain 단순 상품조회 API
    public Result readBeplainItem(){
        List<ItemDto> collect = itemService.findBeItem()
                .stream()
                .map(i -> new ItemDto(i))
                .collect(Collectors.toList());
        return new Result((collect));
    }

    @PostMapping("items/brand") //브랜드에 따른 조회 API
    public Result readForBrand(@RequestBody ReadItemBrandRequest readItemBrandRequest){
        List<ItemDto> collect = itemService.findSkinBrand(readItemBrandRequest.getBrand())
                .stream()
                .map(i -> new ItemDto(i))
                .collect(Collectors.toList());
        return new Result(collect);
    }

    @PostMapping("items/skintype") //스킨타입에 따른 조회 API
    public Result readForSkinType(@RequestBody ReadItemSkinTypeRequest readItemSkinTypeRequest){
        List<ItemDto> collect = itemService.findSkinTypeItem(readItemSkinTypeRequest.getSkinType())
                .stream()
                .map(i -> new ItemDto(i))
                .collect(Collectors.toList());
        return new Result(collect);
    }

}
