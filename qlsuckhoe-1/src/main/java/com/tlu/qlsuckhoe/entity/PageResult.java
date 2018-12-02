package com.tlu.qlsuckhoe.entity;
import java.util.List;

public class PageResult<T>
{
    public List<T> Data;
    public PagingInfo Paging;
    public PageResult() {};
    public PageResult(List<T> items, int pageNo, int pageSize, int totalRecordCount)
    {
        this.Data = items;
        PagingInfo pag1=new PagingInfo();
        pag1.PageNo=pageNo;
        pag1.PageSize=pageSize;
        pag1.TotalRecordCount=totalRecordCount;
        pag1.PageCount = totalRecordCount > 0
                ? (int)Math.ceil(totalRecordCount / (double)pageSize)
                : 0;
        this.Paging=pag1;
    }

}
