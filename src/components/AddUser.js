import React, { useState } from 'react';
import { addUser } from '../service/api';
import { useHistory } from 'react-router-dom';

const initialValues = {
    รหัสนักวิจัย: '',
    หมายเลขบัตรประชาชน: '',
    คำนำหน้าชื่อ: '',
    ชื่อนามสกุล: '',
    name: '',
    เพศ: '',
    สถานภาพสมรส: '',
    วันเกิด: '',
    ที่อยู่: '',
    โทรศัพท์: '',
    ตำแหน่งบริหาร: '',
    ตำแหน่งทางวิชาการ: '',
    วิทยาเขต: '',
    คณะ: ''
}

const AddUser = () => {
    const [user, setUser] = useState(initialValues);
    const { 
        รหัสนักวิจัย, 
        หมายเลขบัตรประชาชน, 
        คำนำหน้าชื่อ,
        ชื่อนามสกุล,
        name,
        เพศ,
        สถานภาพสมรส,
        วันเกิด,
        ที่อยู่,
        โทรศัพท์,
        ตำแหน่งบริหาร,
        ตำแหน่งทางวิชาการ,
        วิทยาเขต,
        คณะ
    } = user;
    const history = useHistory();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <div className="container p-4 ">
            <div class="row mb-3">
                <div class="col-2">
                    <label for="formFile" class="form-label" >อัพโหลดรูปภาพ</label>
                </div>
                <div class="col-10">
                    <input class="form-control-sm" type="file" id="formFile" />
                </div>
            </div>
            <div class="row">
                <div class="col-3"><p>รหัสนักวิจัย</p></div>
                <div class="col-9">
                    <input type="number" onChange={(e) => onValueChange(e)} name="รหัสนักวิจัย" value={รหัสนักวิจัย}/>
                </div>
            </div>     
            <div class="row">
                <div class="col-3"><p>หมายเลขบัตรประชาชน*</p></div>
                <div class="col-9">
                    <input type="number" onChange={(e) => onValueChange(e)} name="หมายเลขบัตรประชาชน" value={หมายเลขบัตรประชาชน} required/>
                </div>
            </div>
            <div class="row">
                <div class="col-2"><p>คำนำหน้าชื่อ</p></div>
                <div class="col-10">
                    <select class="form-select-sm" aria-label=".form-select-sm example" onChange={(e) => onValueChange(e)} name="คำนำหน้าชื่อ" value={คำนำหน้าชื่อ}>
                        <option selected></option>
                        <option value="นาย">นาย</option>
                        <option value="นาง">นาง</option>
                        <option value="นางสาว">นางสาว</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-3"><p>ชื่อ-นามสกุล (ไทย)*</p> </div>
                <div class="col-9">
                    <input type="text" onChange={(e) => onValueChange(e)} name="ชื่อนามสกุล" value={ชื่อนามสกุล} required />
                </div>
            </div>       
            <div class="row">
                <div class="col-3"><p>ชื่อ-นามสกุล (อังกฤษ)</p> </div>
                <div class="col-9">
                    <input type="text" onChange={(e) => onValueChange(e)} name="name" value={name} required />
                </div>
            </div>       
            <div class="row">
                <div class="col-2"><p>เพศ</p></div>
                <div class="col-10" >
                    <select class="form-select-sm" aria-label=".form-select-sm" onChange={(e) => onValueChange(e)} name="เพศ" value={เพศ}>
                        <option selected></option>
                        <option value="ชาย">ชาย</option>
                        <option value="หญิง">หญิง</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-2"><p>สถานภาพสมรส</p></div>
                <div class="col-10">
                    <select class="form-select-sm" aria-label=".form-select-sm" onChange={(e) => onValueChange(e)} name="สถานภาพสมรส" value={สถานภาพสมรส}>
                        <option selected></option>
                        <option value="โสด">โสด</option>
                        <option value="แต่งงาน">แต่งงาน</option>
                    </select>
                </div>
            </div>       
            <div class="row">
                <div class="col-3"><p>วันเกิด*</p></div>
                <div class="col-9">
                    <input type="text" onChange={(e) => onValueChange(e)} name="วันเกิด" value={วันเกิด} required />
                </div>
            </div>
            <div class="row">
                <div class="col-3"><p>ที่อยู่*</p></div>
                <div class="col-9">
                    <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" onChange={(e) => onValueChange(e)} name="ที่อยู่" value={ที่อยู่} required></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-3"><p>โทรศัพท์*</p> </div>
                <div class="col-9">
                    <input type="number" onChange={(e) => onValueChange(e)} name="โทรศัพท์" value={โทรศัพท์} required />
                </div>
            </div>
            <div class="row">
                <div class="col-3"><p>ตำแหน่งบริหาร</p></div>
                <div class="col-9">
                    <input type="text" onChange={(e) => onValueChange(e)} name="ตำแหน่งบริหาร" value={ตำแหน่งบริหาร} required />
                </div>
            </div>
            <div class="row">
                <div class="col-3"><p>ตำแหน่งทางวิชาการ*</p></div>
                <div class="col-9">
                    <select class="form-select-md" aria-label=".form-select-sm" onChange={(e) => onValueChange(e)} name="ตำแหน่งทางวิชาการ" value={ตำแหน่งทางวิชาการ}>
                        <option selected></option>
                        <option value="อาจารย์">อาจารย์</option>
                        <option value="ผู้ช่วยศาสตราจารย์">ผู้ช่วยศาสตราจารย์</option>
                        <option value="รองศาสตราจารย์">รองศาสตราจารย์</option>
                        <option value="ศาสตราจารย์">ศาสตราจารย์</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-3"><p>วิทยาเขต*</p></div>
                <div class="col-9">
                    <select class="form-select-md" aria-label=".form-select-sm" onChange={(e) => onValueChange(e)} name="วิทยาเขต" value={วิทยาเขต}>
                        <option selected></option>
                        <option value="บางเขน">บางเขน</option>
                        <option value="กำแพงแสน">กำแพงแสน</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-3"><p>คณะ/สถาบัน/สำนัก*</p></div>
                <div class="col-9">
                    <select class="form-select-md" aria-label=".form-select-sm" onChange={(e) => onValueChange(e)} name="คณะ" value={คณะ}>
                        <option selected></option>
                        <option value="วิศวกรรมศาสตร์">วิศวกรรมศาสตร์</option>
                        <option value="เกษตร">เกษตร</option>
                        <option value="บริหารธุรกิจ">บริหารธุรกิจ</option>
                        <option value="มนุษยศาสตร์">มนุษยศาสตร์</option>
                        <option value="วิทยาศาสตร์">วิทยาศาสตร์</option>
                        <option value="สัตวแพทยศาสตร์">สัตวแพทยศาสตร์</option>
                        <option value="เศรษฐศาสตร์">สังคมศาสตร์</option>
                        <option value="สังคมศาสตร์">สังคมศาสตร์</option>
                        <option value="วนศาสตร์">วนศาสตร์</option>
                        <option value="สถาปัตยกรรมศาสตร์">สถาปัตยกรรมศาสตร์</option>
                        <option value="สิ่งแวดล้อม">สิ่งแวดล้อม</option>
                    </select>
                </div>
            </div>
            <div className="pb-5">
                <button 
                    type="button" 
                    class="btn btn-success m-2"
                    onClick={() => addUserDetails()}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AddUser;
