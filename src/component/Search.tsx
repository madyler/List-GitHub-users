import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {SearchUserType} from './Gitub'

type SearchResultType = {
    items: SearchUserType[]
}
type PropsType = {
    setUsers: (users: SearchUserType[]) => void
}

export const Search: React.FC<PropsType> = ({setUsers}) => {
    console.log('SEARCH')

    const [tempSearch, setTempSearch] = useState('denisrudov')
    const [searchTerm, setSearchTerm] = useState('denisrudov')

    useEffect(() => {
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
                <br/>
                <button onClick={() => {
                    setSearchTerm(tempSearch)
                }}>Find
                </button>
            </div>
}