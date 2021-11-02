import React, {useEffect, useState} from 'react'
import s from '../Gitub.module.css'
import {Search} from './Search'
import {UserDetails} from './UserDetails'
import {UsersList} from './UsersList'

export type SearchUserType = {
    login: string
    id: number
}

export const Github = () => {
    console.log('GIT HUB')
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])

    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])

    return <div className={s.container}>
        <div>
            <Search setUsers={setUsers}/>
            <hr/>
            <UsersList users={users}
                       selectedUser={selectedUser}
                       setSelectedUser={setSelectedUser}/>
        </div>
        <UserDetails selectedUser={selectedUser}/>
    </div>
}