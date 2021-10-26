import React, {useEffect, useState} from 'react'
import s from './Gitub.module.css'
import {Header} from './Header'
import {UserDetails} from './UserDetails'
import {Users} from './Users'

export type SearchUserType = {
    login: string
    id: number
}

export const Github = () => {
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
    const [users, setUsers] = useState<SearchUserType[]>([])

    useEffect(() => {
        console.log('SYNC TAB TITLE')
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])

    return <div className={s.container}>
        <div>
            <Header setUsers={setUsers}/>
            <hr/>
            <Users users={users}
                   selectedUser={selectedUser}
                   setSelectedUser={setSelectedUser}/>
        </div>
        <UserDetails selectedUser={selectedUser}/>
    </div>
}