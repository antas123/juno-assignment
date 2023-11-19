import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { userDetails } from "../data/constant";
import { getRiskLevelColor } from "../helpers/tableHelpers";
import "../App.css"

const Table = ({
  isPending,
  searchedUser,
  setSortConfigIsClear,
  clearSortConfig,
}) => {
  const [data, setData] = useState(userDetails);
  const [sortConfig, setSortConfig] = useState([]);

  useEffect(() => {
    const filteredUserDetails = userDetails.filter((user) =>
      user.user.toLowerCase().startsWith(searchedUser.toLowerCase())
    );
    setData(filteredUserDetails);
  }, [searchedUser]);

  useEffect(() => {
    if (!clearSortConfig) return;
    setSortConfig([]);
  }, [clearSortConfig]);

  const getSortIndicatorColor = (column, direction) => {
    const sort = sortConfig.find((config) => config.key === column);

    if (sort) {
      return sort.direction === direction ? "red" : "grey";
    }

    return "grey";
  };

  const requestSort = (key) => {
    const updatedSortConfig = [...sortConfig];
    const existingSort = updatedSortConfig.find((config) => config.key === key);

    if (existingSort) {
      // Toggle sort direction if the column is already in the sortConfig
      existingSort.direction =
        existingSort.direction === "asc" ? "desc" : "asc";
    } else {
      // Add a new sort configuration if the column is not in the sortConfig
      updatedSortConfig.push({ key, direction: "asc" });
    }
    setSortConfigIsClear(false);
    setSortConfig(updatedSortConfig);
  };

  const getSortedData = () => {
    return [...data].sort((a, b) => {
      for (const config of sortConfig) {
        if (a[config.key] < b[config.key]) {
          return config.direction === "asc" ? -1 : 1;
        }
        if (a[config.key] > b[config.key]) {
          return config.direction === "asc" ? 1 : -1;
        }
      }
      return 0;
    });
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th
              style={{
                borderTopLeftRadius: "12px",
                width: "250px",
                height: "35px",
              }}
              // onClick={() => requestSort("user")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "10px",
                  height: "20px",
                }}
              >
                <p>User</p>
              </div>
            </th>
            <th
              style={{ width: "149px" }}
              onClick={() => requestSort("riskLevel")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "10px",
                  height: "20px",
                  alignItems: "center",
                }}
              >
                <> Risk level </>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "large",
                      marginBottom: "-3px",
                      fontWeight: "900",
                      color: getSortIndicatorColor("riskLevel", "asc"),
                    }}
                    class="material-symbols-outlined"
                  >
                    expand_less
                  </span>
                  <span
                    style={{
                      fontSize: "large",
                      marginTop: "-3px",
                      fontWeight: "900",
                      color: getSortIndicatorColor("riskLevel", "desc"),
                    }}
                    class="material-symbols-outlined"
                  >
                    expand_more
                  </span>
                </div>
              </div>
            </th>
            <th
              style={{ width: "149px" }}
              // onClick={() => requestSort("triggerReason")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "10px",
                  height: "20px",
                  fontSize:"12px"
                }}
              >
                {isPending ? "Trigger Action" : "Action Reason"}
              </div>
            </th>
            <th
              style={{ width: "135px" }}
              onClick={() => requestSort("inQueueFor")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "10px",
                  height: "20px",
                  alignItems: "center",
                }}
              >
                {isPending ? "In Queue For" : "Time To Close"}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "large",
                      marginBottom: "-3px",
                      fontWeight: "900",
                      color: getSortIndicatorColor("inQueueFor", "asc"),
                    }}
                    class="material-symbols-outlined"
                  >
                    expand_less
                  </span>
                  <span
                    style={{
                      fontSize: "large",
                      fontWeight: "900",
                      marginTop: "-3px",
                      color: getSortIndicatorColor("inQueueFor", "desc"),
                    }}
                    class="material-symbols-outlined"
                  >
                    expand_more
                  </span>
                </div>
              </div>
            </th>
            <th
              style={{ width: "169px" }}
              onClick={() => requestSort("dateAdded")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "10px",
                  height: "20px",
                  alignItems: "center",
                  fontSize:"12px"
                }}
              >
                <> Date added on </>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "large",
                      marginBottom: "-3px",
                      fontWeight: "900",
                      color: getSortIndicatorColor("dateAdded", "asc"),
                    }}
                    class="material-symbols-outlined"
                  >
                    expand_less
                  </span>
                  <span
                    style={{
                      fontSize: "large",
                      marginTop: "-3px",
                      fontWeight: "900",
                      color: getSortIndicatorColor("dateAdded", "desc"),
                    }}
                    class="material-symbols-outlined"
                  >
                    expand_more
                  </span>
                </div>
              </div>
            </th>
            <th
              style={{ borderTopRightRadius: "12px", width: "200px" }}
              // onClick={() => requestSort("previouslyReviewed")}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: "10px",
                  height: "20px",
                  fontSize:"12px"
                }}
              >
                {isPending ? "Previously Reviewed" : "Action Taken By"}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", color: "grey" }}>
                No data matches the search criteria: starting with "{" "}
                {searchedUser} "
              </td>
            </tr>
          ) : (
            getSortedData().map((row, index) => (
              <tr key={index}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height:"50px",
                      justifyContent: "space-between",
                    }}
                   >
                    <div
                      style={{
                        margin: "0",
                        padding: "8px",
                        display: "flex",
                        flexDirection: "column",
                        marginTop:"-15px"
                      }}
                     >
                      <p style={{ marginBottom: "2px", fontWeight: "bolder", fontSize:"13px" }}>
                        {row.user}
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "11px",
                          color: "#526D82",
                          fontWeight: "600",
                        }}
                      >
                        {row.email}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "45px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ color: "#005eff" }}
                      />
                    </div>
                  </div>
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: getRiskLevelColor(row.riskLevel),
                      }}
                      class="circle"
                    ></div>
                    <p
                      style={{
                        margin: "0",
                        padding: "10px",
                        color: getRiskLevelColor(row.riskLevel),
                        fontWeight: "600",
                        fontSize:"14px"
                      }}
                    >
                      {row.riskLevel}
                    </p>
                  </div>
                </td>

                {isPending ? (
                  <td>
                    {" "}
                    <p
                      style={{
                        margin: "0",
                        padding: "10px",
                        fontWeight: "600",
                      }}
                    >
                      {row.triggerReason}
                    </p>{" "}
                  </td>
                ) : (
                  <td>
                    {" "}
                    <p
                      style={{
                        margin: "0",
                        padding: "10px",
                        fontWeight: "600",
                      }}
                    >
                      {row.ActionReason}
                    </p>
                  </td>
                )}

                {isPending ? (
                  <td>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "bold",
                        padding: "10px",
                      }}
                    >
                      {" "}
                      {row.inQueueFor}
                    </p>
                  </td>
                ) : (
                  <td>
                    <p
                      style={{
                        margin: "0",
                        fontWeight: "bold",
                        padding: "10px",
                      }}
                    >
                      {" "}
                      {row.TimeToClose}
                    </p>
                  </td>
                )}

                <td>
                  {" "}
                  <p
                    style={{
                      margin: "0",
                      padding: "10px",
                      color: "grey",
                      fontWeight: "600",
                    }}
                  >
                    {row.dateAdded}
                  </p>{" "}
                </td>

                {isPending ?
                 
                ( <td><div
                      style={{
                        margin: "0",
                        padding: "8px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                     >
                      <p style={{ marginBottom: "2px", fontWeight: "bolder", fontSize:"15px" }}>
                        {row.previouslyReviewed}
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "11px",
                          color: "#526D82",
                          fontWeight: "600",
                        }}
                      >
                        {row.userdate}
                      </p>
                    </div></td> )
                : (
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          margin: "0",
                          padding: "8px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <p style={{ margin: "0", fontWeight: "600" }}>
                          {row.ActionTakenBy}
                        </p>
                        <p
                          style={{
                            margin: "0",
                            fontSize: "smaller",
                            color: "#526D82",
                            fontWeight: "500",
                          }}
                        >
                          {row.actionEmail}
                        </p>
                      </div>
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;