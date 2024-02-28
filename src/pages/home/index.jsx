import React, { useState } from "react";
import { Link } from "react-router-dom";
import { boards, exams, years } from "../../utils";
import bdlogo from "../../assets/bd_logo.png";
import bannerflag from "../../assets/banner_flag.jpg";
import tbl from "../../assets/tbl_logo.png";

const Home = () => {
  const [exam, setExam] = useState("hsc_alim_equivalent");
  const [year, setYear] = useState(null);
  const [board, setBoard] = useState("");
  const [roll, setRoll] = useState(null);
  const [registration, setRegistration] = useState(null);
  const [verify, setVerify] = useState(null);

  const handleSubmit = () => {
    if (!year) {
      alert("Please Select Year!");
    } else if (!board) {
      alert("Please Select Board!");
    } else if (!roll) {
      alert("Please Enter Exam Roll!");
    } else if (!registration) {
      alert("Please Enter Registration Number!");
    } else if (!verify) {
      alert("Please Enter the Value");
    }
  };
  return (
    <div className="bg-gray-200 w-full flex justify-center">
      <div className="shadow-2xl bg-white p-2 mt-4 rounded-md w-[650px]">
        <div className="w-full flex bg-gray-200">
          <div className="flex items-center w-[142px] justify-center">
            <img src={bdlogo} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center bg-[#007814] text-[#95e17d] font-bold">
              <h1 className="text-[17px] pl-2">Ministry of Education</h1>
              <img src={bannerflag} />
            </div>
            <div className="block h-[1px] w-full bg-[#95e17d]" />
            <div className="bg-[#007814] px-2 py-1 font-bold text-[20px] leading-tight text-white">
              Intermediate and Secondary Education Boards Bangladesh
            </div>
            <div className="bg-[#72B86F] flex justify-end py-1 pr-2 border-y-[1px] border-white">
              <Link
                to="http://www.educationboard.gov.bd/"
                className="text-[11px] text-white hover:text-[#00CC99] font-semibold tracking-wider"
              >
                Official Website of Education Board
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[75%] mx-auto m-4 border-[2px] border-[#6C6C6C]">
          <div className="px-8 py-4 space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between w-[30%]">
                <h1 className="font-bold">Examination</h1>
                <span>:</span>
              </div>
              <div className="flex items-center">
                <select
                  className="border-[1px] rounded-[4px] border-[#999] w-[205px] p-[4px] text-[14px]"
                  value={exam}
                  onChange={(e) => setExam(e.target.value)}
                >
                  {exams.map((item, i) => (
                    <option key={i} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between w-[30%]">
                <h1 className="font-bold">Year</h1>
                <span>:</span>
              </div>
              <div className="flex items-center">
                <select
                  className="border-[1px] rounded-[4px] border-[#999] w-[205px] p-[4px] text-[14px]"
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option>Select One</option>
                  {years.map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between w-[30%]">
                <h1 className="font-bold">Board</h1>
                <span>:</span>
              </div>
              <div className="flex items-center">
                <select
                  className="border-[1px] rounded-[4px] border-[#999] w-[205px] p-[4px] text-[14px]"
                  onChange={(e) => setBoard(e.target.value)}
                >
                  <option>Select One</option>
                  {boards.map((v, i) => (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between w-[30%]">
                <h1 className="font-bold">Roll</h1>
                <span>:</span>
              </div>
              <div className="flex items-center">
                <input
                  className="border-[1px] rounded-[4px] border-[#999] w-[205px] p-[4px] text-[14px]"
                  type="number"
                  onChange={(e) => setRoll(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between w-[30%]">
                <h1 className="font-bold">Reg: No</h1>
                <span>:</span>
              </div>
              <div className="flex items-center">
                <input
                  className="border-[1px] rounded-[4px] border-[#999] w-[205px] p-[4px] text-[14px]"
                  type="number"
                  onChange={(e) => setRegistration(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between w-[30%]">
                <h1 className="font-bold">2 + 3</h1>
                <span>=</span>
              </div>
              <div className="flex items-center">
                <input
                  className="border-[1px] rounded-[4px] border-[#999] w-[205px] p-[4px] text-[14px]"
                  type="number"
                  onChange={(e) => setVerify(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full flex justify-end gap-1">
              <button className="border-[1px] border-[#999] hover:bg-gray-200 text-[13px] px-1 font-semibold w-[60px]">
                Reset
              </button>
              <button
                className="border-[1px] border-[#999] hover:bg-gray-200 text-[13px] px-1 font-semibold w-[60px]"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[5px] bg-[#86C775] block" />
        <div className="bg-[#F2F2F2] w-full flex justify-between items-center px-4 py-6">
          <p className="text-[#666666] text-[10px]">
            ©2005-2024 Ministry of Education, All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[#666666] text-[10px]">Powered by</p>
            <img src={tbl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
