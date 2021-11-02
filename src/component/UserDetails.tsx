import React, {useEffect, useState} from 'react'
import axios from 'axios'
import s from '../Gitub.module.css'
import {SearchUserType} from './Gitub'
import {Timer} from './Timer'

export type UserType = {
    login: string
    id: number
    avatar_url: string
    followers: number
    created_at: string
    updated_at: string
}
type ReposType = {
    name: string
    id: number
}
type PropsType = {
    selectedUser: SearchUserType | null
}

export const UserDetails: React.FC<PropsType> = ({selectedUser}) => {
    console.log('USER DETAILS')

    const [userDetails, setUserDetails] = useState<null | UserType>(null)
    const [repos, setRepos] = useState<ReposType[]>([])


    useEffect(() => {
        if (!!selectedUser) {
            axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
                .then(res => {
                    setUserDetails(res.data)
                })
            axios.get<ReposType[]>(`https://api.github.com/users/${selectedUser.login}/repos`)
                .then(res => {
                    setRepos(res.data)
                })
        }
    }, [selectedUser])



    const Reset = () => {
        setUserDetails(null)
        setRepos([])
    }

    return <div className={s.container}>
        <div>
            {userDetails && <div>
                <Timer reset={Reset} user={userDetails.login}/>
                <h2>{userDetails.login}</h2>
                <img src={userDetails.avatar_url} alt={''}/>
                <div>
                    followers:{userDetails.followers}
                </div>
                <div>
                    created at :{userDetails.created_at}
                </div>
                <div>
                    updated at :{userDetails.updated_at}
                </div>
            </div>}
        </div>
        {userDetails && <div>
            repositories :
            <hr/>
            {repos.map(r => <li>
                {r.name}
            </li>)}
        </div>}
    </div>
}