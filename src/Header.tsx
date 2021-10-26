import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {SearchUserType} from './Gitub'

type SearchResultType = {
    items: SearchUserType[]
}

export const Header: React.FC<any> = ({setUsers}) => {
    const [tempSearch, setTempSearch] = useState('denisrudov')
    const [searchTerm, setSearchTerm] = useState('denisrudov')

    useEffect(() => {
        console.log('SYNC USERS')
        axios.get<SearchResultType>(`https://api.github.com/search/users?q=${searchTerm}`)
            .then(res => {
                setUsers(res.data.items)
            })
    }, [searchTerm, setUsers])

    return <div>
                <input placeholder="search"
                       value={tempSearch}
                       onChange={(e) => {
                           setTempSearch(e.currentTarget.value)
                       }}/>
                <button onClick={() => {
                    setSearchTerm(tempSearch)
                }}>Find
                </button>
            </div>
}