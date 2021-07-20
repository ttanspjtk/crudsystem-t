import React, { useState, useEffect, Component } from 'react';
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }


    return (
        <div className="p-4">
            {
                users.map(user => (
                    <div className="container">
                        <div>{user.รูป}</div>
                        <div>Id : {user.id}</div>
                        <div>รหัสนักวิจัย : {user.รหัสนักวิจัย}</div>
                        <div>หมายเลขบัตรประชาชน : {user.หมายเลขบัตรประชาชน}</div>
                        <div>ชื่อ : {user.คำนำหน้าชื่อ}{user.ชื่อนามสกุล}</div>
                        <div>Name : {user.name}</div>
                        <div>เพศ : {user.เพศ}</div>
                        <div>สถานภาพสมรส : {user.สถานภาพสมรส}</div>
                        <div>ที่อยู่ : {user.ที่อยู่} </div>    
                        <div>เบอร์โทรศัพท์ : {user.โทรศัพท์} </div>    
                        <div>ตำแหน่งบริหาร : {user.ตำแหน่งบริหาร}</div>
                        <div>ตำแหน่งทางวิชาการ : {user.ตำแหน่งทางวิชาการ}</div>        
                        <div>วิทยาเขต : {user.วิทยาเขต}</div>        
                        <div>คณะ/สถาบัน/สำนัก : {user.คณะ}</div>        

                        <div className="pb-2">
                            <Button
                                variant="contained"
                                color="primary"
                                component={Link}
                                style={{float: 'left', marginTop: '0.5rem'}}
                                to={`/edit/${user.id}`}
                            >
                                Edit
                            </Button>
                            <button 
                                type="button" 
                                class="btn btn-outline-danger m-2"
                                onClick={() => deleteUserData(user.id)}
                            >
                                Delete
                            </button>
                            <hr />
                        </div>    
                    </div>
                    
                ))
            }
        </div>
    );
};

export default AllUsers;
