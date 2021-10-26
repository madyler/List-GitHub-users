import React from 'react'
import s from './Gitub.module.css'
import {SearchUserType} from './Gitub'

type PropsType = {
    users: SearchUserType[]
    selectedUser: SearchUserType | null
    setSelectedUser: (user: SearchUserType) => void
}

export const Users: React.FC<PropsType> = ({users, selectedUser, setSelectedUser}) => {
    return <div>
            <ul>
                {users
                    .map(u => <li key={u.id} className={selectedUser === u ? s.selected : ''}
                                  onClick={() => {
                                      setSelectedUser(u)
                                  }}>
                        {u.login}
                    </li>)}
            </ul>
    </div>
}