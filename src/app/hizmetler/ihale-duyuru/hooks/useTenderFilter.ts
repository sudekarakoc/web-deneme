"use client";

import { useMemo, useState } from "react";
import { Tender } from "../types/tender";

export function useTenderFilter(data: Tender[]) {

    const [search,setSearch] = useState("");

    const [expanded,setExpanded] = useState<number | null>(null);

    const filtered = useMemo(()=>{

        return data.filter(item=>{

            return (
                item.baslik.toLowerCase().includes(search.toLowerCase()) ||

                item.birim.toLowerCase().includes(search.toLowerCase())
            )

        })

    },[data,search]);

    const toggle=(id:number)=>{

        setExpanded(prev=>prev===id ? null:id);

    }

    return{

        search,

        setSearch,

        expanded,

        toggle,

        filtered

    }

}