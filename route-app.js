module.exports = function (app) {
    app.get('/cashbox', function (req, res) {
        res.json({
          "responseStatus": {
            "responseCode": "00",
            "responseDesc": "SUCCESS"
          },
          "paging": {
            "data": [
              {
                "modifiedBy": "fes.uat01",
                "modifiedDate": 1522640795718,
                "id": "29",
                "user": {
                  "modifiedDate": 1523872478294,
                  "id": 42,
                  "branch": {
                    "modifiedBy": "fes.uat153",
                    "modifiedDate": 1519203489541,
                    "code": "0012",
                    "hierarchy": {
                      "value": 1,
                      "label": "Global Hierarchy",
                      "description": "Global Hierarchy",
                      "listHierarchyRole": [
                        {
                          "id": "8A8108A8623D83E301623D83E52A000A",
                          "role": {
                            "id": 1,
                            "fxRole": "SAM",
                            "roleName": "SAM",
                            "description": "SAM Officer",
                            "status": "A  ",
                            "fxRoleId": 7000
                          },
                          "parentRole": {
                            "id": 5,
                            "fxRole": "SAMSPV",
                            "roleName": "SAM SPV",
                            "description": "SAM Supervisor",
                            "status": "A  ",
                            "fxRoleId": 9000,
                            "listKewenangan": [
                              {
                                "id": "124",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "id": "1234",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290000",
                          "role": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 0,
                            "fxRole": "test",
                            "roleName": "test",
                            "description": "test",
                            "status": "A  ",
                            "fxRoleId": 0
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290003",
                          "role": {
                            "id": 3,
                            "fxRole": "Teller",
                            "roleName": "Teller",
                            "description": "Teller",
                            "status": "A  ",
                            "fxRoleId": 3002,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat154",
                                "createdDate": 1522764865554,
                                "modifiedBy": "fes.uat154",
                                "modifiedDate": 1522764865554,
                                "id": "40289884628bc68c01628bdbe012000a",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865556,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865556,
                                    "id": "40289884628bc68c01628bdbe014000d",
                                    "daftarModul": {
                                      "createdBy": "fes.uat154",
                                      "createdDate": 1522658803388,
                                      "modifiedBy": "fes.uat154",
                                      "modifiedDate": 1522658803388,
                                      "code": "CobainSaja",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803394,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803394,
                                          "id": "402896ce62846c13016285897ec20034",
                                          "modul": {
                                            "id": "c514805091ea42fc8376e688f1cc7f26",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction1",
                                            "transactionName": "Payment Transaction 1"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803395,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803395,
                                          "id": "402896ce62846c13016285897ec40035",
                                          "modul": {
                                            "id": "663C463ED80F382FE0535553010A0B99",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "cashRequestOperation",
                                            "transactionName": "Permintaan Uang"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803391,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803391,
                                          "id": "402896ce62846c13016285897ebf0032",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220000",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitCreate",
                                            "transactionName": "Create Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803392,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803392,
                                          "id": "402896ce62846c13016285897ec10033",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90223456",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulCreate",
                                            "transactionName": "Create Modul"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865555,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865555,
                                    "id": "40289884628bc68c01628bdbe013000b",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL1",
                                      "listModuleGroup": [
                                        {
                                          "id": "131324",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865555,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865555,
                                    "id": "40289884628bc68c01628bdbe013000c",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL3",
                                      "listModuleGroup": [
                                        {
                                          "id": "1345",
                                          "modul": {
                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction2",
                                            "transactionName": "Payment Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              {
                                "createdBy": "fes.uat154",
                                "createdDate": 1522764865551,
                                "modifiedBy": "fes.uat154",
                                "modifiedDate": 1522764865551,
                                "id": "40289884628bc68c01628bdbe00f0006",
                                "typeKewenangan": "OPT",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865552,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865552,
                                    "id": "40289884628bc68c01628bdbe0100007",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTeller",
                                      "listModuleGroup": [
                                        {
                                          "id": "15",
                                          "modul": {
                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction2",
                                            "transactionName": "Payment Transaction 2"
                                          }
                                        },
                                        {
                                          "id": "11",
                                          "modul": {
                                            "id": "663C463ED810382FE0535553010A0B99",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "cashReturnOperation",
                                            "transactionName": "Penyerahan Uang"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865553,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865553,
                                    "id": "40289884628bc68c01628bdbe0110009",
                                    "daftarModul": {
                                      "createdBy": "fes.uat154",
                                      "createdDate": 1522654631327,
                                      "modifiedBy": "fes.uat154",
                                      "modifiedDate": 1522654631327,
                                      "code": "akupadamu",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631339,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631339,
                                          "id": "402896ce62846c1301628549d5ab0008",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631341,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631341,
                                          "id": "402896ce62846c1301628549d5ad000a",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220001",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitEdit",
                                            "transactionName": "Edit Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631335,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631335,
                                          "id": "402896ce62846c1301628549d5a80006",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220000",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitCreate",
                                            "transactionName": "Create Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631337,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631337,
                                          "id": "402896ce62846c1301628549d5a90007",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90223456",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulCreate",
                                            "transactionName": "Create Modul"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631343,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631343,
                                          "id": "402896ce62846c1301628549d5af000b",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631340,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631340,
                                          "id": "402896ce62846c1301628549d5ac0009",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865553,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865553,
                                    "id": "40289884628bc68c01628bdbe0110008",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL2",
                                      "listModuleGroup": [
                                        {
                                          "id": "13123",
                                          "modul": {
                                            "id": "c514805091ea42fc8376e688f1cc7f26",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction1",
                                            "transactionName": "Payment Transaction 1"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290004",
                          "role": {
                            "id": 4,
                            "fxRole": "JuruBayar",
                            "roleName": "JB",
                            "description": "Juru Bayar",
                            "status": "A  ",
                            "fxRoleId": 6000
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0009",
                          "role": {
                            "id": 5,
                            "fxRole": "SAMSPV",
                            "roleName": "SAM SPV",
                            "description": "SAM Supervisor",
                            "status": "A  ",
                            "fxRoleId": 9000,
                            "listKewenangan": [
                              {
                                "id": "124",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "id": "1234",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 0,
                            "fxRole": "test",
                            "roleName": "test",
                            "description": "test",
                            "status": "A  ",
                            "fxRoleId": 0
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290001",
                          "role": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0006",
                          "role": {
                            "id": 7,
                            "fxRole": "CST",
                            "roleName": "CST",
                            "description": "CS and TELLER",
                            "status": "A  ",
                            "fxRoleId": 8000
                          },
                          "parentRole": {
                            "id": 16,
                            "fxRole": "CSSupervisor",
                            "roleName": "CS Supervisor",
                            "description": "CS Supervisor",
                            "status": "A  ",
                            "fxRoleId": 3001
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290005",
                          "role": {
                            "id": 7,
                            "fxRole": "CST",
                            "roleName": "CST",
                            "description": "CS and TELLER",
                            "status": "A  ",
                            "fxRoleId": 8000
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0007",
                          "role": {
                            "id": 8,
                            "fxRole": "CS",
                            "roleName": "Customer Service",
                            "description": "Customer Service",
                            "status": "A  ",
                            "fxRoleId": 2000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812322571,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812322571,
                                "id": "40289884628bc68c01628eb0030b002b",
                                "typeKewenangan": "OPT",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812322571,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812322571,
                                    "id": "40289884628bc68c01628eb0030b002c",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                          "role": {
                            "id": 9,
                            "fxRole": "NOCOfficer",
                            "roleName": "NOC Officer",
                            "description": "NOC Officer",
                            "status": "A  ",
                            "fxRoleId": 4001
                          },
                          "parentRole": {
                            "id": 10,
                            "fxRole": "NOCSupervisor",
                            "roleName": "NOC Supervisor",
                            "description": "NOC Supervisor",
                            "status": "A  ",
                            "fxRoleId": 4002
                          }
                        },
                        {
                          "id": "F30D2C6BC45649F69E6202AFEE374046",
                          "role": {
                            "id": 11,
                            "fxRole": "CCCOfficer",
                            "roleName": "CCC Officer",
                            "description": "CCC Officer",
                            "status": "A  ",
                            "fxRoleId": 4003
                          },
                          "parentRole": {
                            "id": 12,
                            "fxRole": "CCCSupervisor",
                            "roleName": "CCC Supervisor",
                            "description": "CCC Supervisor",
                            "status": "A  ",
                            "fxRoleId": 4004
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0008",
                          "role": {
                            "id": 15,
                            "fxRole": "BackOffice",
                            "roleName": "Back Office",
                            "description": "Back Office",
                            "status": "A  ",
                            "fxRoleId": 5000
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290002",
                          "role": {
                            "id": 16,
                            "fxRole": "CSSupervisor",
                            "roleName": "CS Supervisor",
                            "description": "CS Supervisor",
                            "status": "A  ",
                            "fxRoleId": 3001
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "branchName": "KC BOGOR",
                    "status": "A  ",
                    "departmentId": 8001
                  },
                  "userRoles": [
                    {
                      "id": "8A810893618DD9AA01618DD9AB1C0041",
                      "role": {
                        "id": 2,
                        "fxRole": "BranchManager",
                        "roleName": "BH",
                        "description": "Branch Head",
                        "status": "A  ",
                        "fxRoleId": 1000,
                        "listKewenangan": [
                          {
                            "createdBy": "fes.uat153",
                            "createdDate": 1522812282705,
                            "modifiedBy": "fes.uat153",
                            "modifiedDate": 1522812282705,
                            "id": "40289884628bc68c01628eaf67510029",
                            "typeKewenangan": "OTR",
                            "listModulKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282706,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282706,
                                "id": "40289884628bc68c01628eaf6752002a",
                                "daftarModul": {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522811765047,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522811765047,
                                  "code": "testCreate",
                                  "listModuleGroup": [
                                    {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765052,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765052,
                                      "id": "40289884628bc68c01628ea7813c0022",
                                      "modul": {
                                        "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                        "moduleCode": "0001",
                                        "moduleName": "Cash Management",
                                        "transactionType": "overlimitCis",
                                        "transactionName": "Overlimit CIS"
                                      }
                                    },
                                    {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765054,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765054,
                                      "id": "40289884628bc68c01628ea7813e0023",
                                      "modul": {
                                        "id": "0ded15405d8c4479a43d631ab1f4964e",
                                        "moduleCode": "0001",
                                        "moduleName": "Cash Management",
                                        "transactionType": "overlimitCicb",
                                        "transactionName": "Overlimit CICB"
                                      }
                                    },
                                    {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765059,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765059,
                                      "id": "40289884628bc68c01628ea781430024",
                                      "modul": {
                                        "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                        "moduleCode": "0003",
                                        "moduleName": "CIF Maintenance",
                                        "transactionType": "CIFMaintenance",
                                        "transactionName": "CIF Maintenance"
                                      }
                                    },
                                    {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765063,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765063,
                                      "id": "40289884628bc68c01628ea781470025",
                                      "modul": {
                                        "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                        "moduleCode": "0003",
                                        "moduleName": "CIF Maintenance",
                                        "transactionType": "CIFTransaction2",
                                        "transactionName": "CIF Transaction 2"
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ],
                  "userName": "fes.uat09",
                  "fullName": "0012 VAULT",
                  "loginType": "U",
                  "email": "IGedePutu.AryPradnyana@dev.corp.btpn.co.id",
                  "status": "A  ",
                  "employeeId": 11010,
                  "userAccountId": 11010,
                  "fxUserId": 11010,
                  "lastLogin": 1523872478292,
                  "interbranchFlag": "Y"
                },
                "branch": {
                  "modifiedBy": "fes.uat153",
                  "modifiedDate": 1519203489541,
                  "code": "0012",
                  "hierarchy": {
                    "value": 1,
                    "label": "Global Hierarchy",
                    "description": "Global Hierarchy",
                    "listHierarchyRole": [
                      {
                        "id": "8A8108A8623D83E301623D83E52A000A",
                        "role": {
                          "id": 1,
                          "fxRole": "SAM",
                          "roleName": "SAM",
                          "description": "SAM Officer",
                          "status": "A  ",
                          "fxRoleId": 7000
                        },
                        "parentRole": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290000",
                        "role": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290003",
                        "role": {
                          "id": 3,
                          "fxRole": "Teller",
                          "roleName": "Teller",
                          "description": "Teller",
                          "status": "A  ",
                          "fxRoleId": 3002,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865554,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865554,
                              "id": "40289884628bc68c01628bdbe012000a",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865556,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865556,
                                  "id": "40289884628bc68c01628bdbe014000d",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522658803388,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522658803388,
                                    "code": "CobainSaja",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803394,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803394,
                                        "id": "402896ce62846c13016285897ec20034",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803395,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803395,
                                        "id": "402896ce62846c13016285897ec40035",
                                        "modul": {
                                          "id": "663C463ED80F382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashRequestOperation",
                                          "transactionName": "Permintaan Uang"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803391,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803391,
                                        "id": "402896ce62846c13016285897ebf0032",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803392,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803392,
                                        "id": "402896ce62846c13016285897ec10033",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000b",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL1",
                                    "listModuleGroup": [
                                      {
                                        "id": "131324",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL3",
                                    "listModuleGroup": [
                                      {
                                        "id": "1345",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865551,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865551,
                              "id": "40289884628bc68c01628bdbe00f0006",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865552,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865552,
                                  "id": "40289884628bc68c01628bdbe0100007",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTeller",
                                    "listModuleGroup": [
                                      {
                                        "id": "15",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      },
                                      {
                                        "id": "11",
                                        "modul": {
                                          "id": "663C463ED810382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashReturnOperation",
                                          "transactionName": "Penyerahan Uang"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110009",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522654631327,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522654631327,
                                    "code": "akupadamu",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631339,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631339,
                                        "id": "402896ce62846c1301628549d5ab0008",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631341,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631341,
                                        "id": "402896ce62846c1301628549d5ad000a",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220001",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitEdit",
                                          "transactionName": "Edit Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631335,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631335,
                                        "id": "402896ce62846c1301628549d5a80006",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631337,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631337,
                                        "id": "402896ce62846c1301628549d5a90007",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631343,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631343,
                                        "id": "402896ce62846c1301628549d5af000b",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631340,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631340,
                                        "id": "402896ce62846c1301628549d5ac0009",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110008",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL2",
                                    "listModuleGroup": [
                                      {
                                        "id": "13123",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290004",
                        "role": {
                          "id": 4,
                          "fxRole": "JuruBayar",
                          "roleName": "JB",
                          "description": "Juru Bayar",
                          "status": "A  ",
                          "fxRoleId": 6000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0009",
                        "role": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290001",
                        "role": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0006",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290005",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0007",
                        "role": {
                          "id": 8,
                          "fxRole": "CS",
                          "roleName": "Customer Service",
                          "description": "Customer Service",
                          "status": "A  ",
                          "fxRoleId": 2000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812322571,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812322571,
                              "id": "40289884628bc68c01628eb0030b002b",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812322571,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812322571,
                                  "id": "40289884628bc68c01628eb0030b002c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                        "role": {
                          "id": 9,
                          "fxRole": "NOCOfficer",
                          "roleName": "NOC Officer",
                          "description": "NOC Officer",
                          "status": "A  ",
                          "fxRoleId": 4001
                        },
                        "parentRole": {
                          "id": 10,
                          "fxRole": "NOCSupervisor",
                          "roleName": "NOC Supervisor",
                          "description": "NOC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4002
                        }
                      },
                      {
                        "id": "F30D2C6BC45649F69E6202AFEE374046",
                        "role": {
                          "id": 11,
                          "fxRole": "CCCOfficer",
                          "roleName": "CCC Officer",
                          "description": "CCC Officer",
                          "status": "A  ",
                          "fxRoleId": 4003
                        },
                        "parentRole": {
                          "id": 12,
                          "fxRole": "CCCSupervisor",
                          "roleName": "CCC Supervisor",
                          "description": "CCC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4004
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0008",
                        "role": {
                          "id": 15,
                          "fxRole": "BackOffice",
                          "roleName": "Back Office",
                          "description": "Back Office",
                          "status": "A  ",
                          "fxRoleId": 5000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290002",
                        "role": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "branchName": "KC BOGOR",
                  "status": "A  ",
                  "departmentId": 8001
                },
                "glNumber": "0012879100360",
                "status": "0",
                "type": "0",
                "currency": {
                  "currIsoCode": "360",
                  "symbol": "IDR",
                  "name": "Rupiah",
                  "internationalName": "Indonesian Rupiah"
                },
                "lastClosed": 1522640795632
              },
              {
                "createdBy": "fes.uat09",
                "createdDate": 1522295015305,
                "modifiedBy": "fes.uat09",
                "modifiedDate": 1522295015305,
                "id": "4028a893626fc38f01626fda87890000",
                "branch": {
                  "modifiedBy": "fes.uat153",
                  "modifiedDate": 1519203489541,
                  "code": "0012",
                  "hierarchy": {
                    "value": 1,
                    "label": "Global Hierarchy",
                    "description": "Global Hierarchy",
                    "listHierarchyRole": [
                      {
                        "id": "8A8108A8623D83E301623D83E52A000A",
                        "role": {
                          "id": 1,
                          "fxRole": "SAM",
                          "roleName": "SAM",
                          "description": "SAM Officer",
                          "status": "A  ",
                          "fxRoleId": 7000
                        },
                        "parentRole": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290000",
                        "role": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290003",
                        "role": {
                          "id": 3,
                          "fxRole": "Teller",
                          "roleName": "Teller",
                          "description": "Teller",
                          "status": "A  ",
                          "fxRoleId": 3002,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865554,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865554,
                              "id": "40289884628bc68c01628bdbe012000a",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865556,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865556,
                                  "id": "40289884628bc68c01628bdbe014000d",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522658803388,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522658803388,
                                    "code": "CobainSaja",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803394,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803394,
                                        "id": "402896ce62846c13016285897ec20034",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803395,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803395,
                                        "id": "402896ce62846c13016285897ec40035",
                                        "modul": {
                                          "id": "663C463ED80F382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashRequestOperation",
                                          "transactionName": "Permintaan Uang"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803391,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803391,
                                        "id": "402896ce62846c13016285897ebf0032",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803392,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803392,
                                        "id": "402896ce62846c13016285897ec10033",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000b",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL1",
                                    "listModuleGroup": [
                                      {
                                        "id": "131324",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL3",
                                    "listModuleGroup": [
                                      {
                                        "id": "1345",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865551,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865551,
                              "id": "40289884628bc68c01628bdbe00f0006",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865552,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865552,
                                  "id": "40289884628bc68c01628bdbe0100007",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTeller",
                                    "listModuleGroup": [
                                      {
                                        "id": "15",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      },
                                      {
                                        "id": "11",
                                        "modul": {
                                          "id": "663C463ED810382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashReturnOperation",
                                          "transactionName": "Penyerahan Uang"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110009",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522654631327,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522654631327,
                                    "code": "akupadamu",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631339,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631339,
                                        "id": "402896ce62846c1301628549d5ab0008",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631341,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631341,
                                        "id": "402896ce62846c1301628549d5ad000a",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220001",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitEdit",
                                          "transactionName": "Edit Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631335,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631335,
                                        "id": "402896ce62846c1301628549d5a80006",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631337,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631337,
                                        "id": "402896ce62846c1301628549d5a90007",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631343,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631343,
                                        "id": "402896ce62846c1301628549d5af000b",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631340,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631340,
                                        "id": "402896ce62846c1301628549d5ac0009",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110008",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL2",
                                    "listModuleGroup": [
                                      {
                                        "id": "13123",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290004",
                        "role": {
                          "id": 4,
                          "fxRole": "JuruBayar",
                          "roleName": "JB",
                          "description": "Juru Bayar",
                          "status": "A  ",
                          "fxRoleId": 6000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0009",
                        "role": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290001",
                        "role": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0006",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290005",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0007",
                        "role": {
                          "id": 8,
                          "fxRole": "CS",
                          "roleName": "Customer Service",
                          "description": "Customer Service",
                          "status": "A  ",
                          "fxRoleId": 2000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812322571,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812322571,
                              "id": "40289884628bc68c01628eb0030b002b",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812322571,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812322571,
                                  "id": "40289884628bc68c01628eb0030b002c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                        "role": {
                          "id": 9,
                          "fxRole": "NOCOfficer",
                          "roleName": "NOC Officer",
                          "description": "NOC Officer",
                          "status": "A  ",
                          "fxRoleId": 4001
                        },
                        "parentRole": {
                          "id": 10,
                          "fxRole": "NOCSupervisor",
                          "roleName": "NOC Supervisor",
                          "description": "NOC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4002
                        }
                      },
                      {
                        "id": "F30D2C6BC45649F69E6202AFEE374046",
                        "role": {
                          "id": 11,
                          "fxRole": "CCCOfficer",
                          "roleName": "CCC Officer",
                          "description": "CCC Officer",
                          "status": "A  ",
                          "fxRoleId": 4003
                        },
                        "parentRole": {
                          "id": 12,
                          "fxRole": "CCCSupervisor",
                          "roleName": "CCC Supervisor",
                          "description": "CCC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4004
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0008",
                        "role": {
                          "id": 15,
                          "fxRole": "BackOffice",
                          "roleName": "Back Office",
                          "description": "Back Office",
                          "status": "A  ",
                          "fxRoleId": 5000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290002",
                        "role": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "branchName": "KC BOGOR",
                  "status": "A  ",
                  "departmentId": 8001
                },
                "glNumber": "0012879100392",
                "status": "1",
                "type": "0",
                "currency": {
                  "currIsoCode": "392",
                  "symbol": "JPY",
                  "name": "Yen",
                  "internationalName": "Japan Yen"
                }
              },
              {
                "createdBy": "fes.uat09",
                "createdDate": 1522295015324,
                "modifiedBy": "fes.uat09",
                "modifiedDate": 1522295015324,
                "id": "4028a893626fc38f01626fda879c0001",
                "branch": {
                  "modifiedBy": "fes.uat153",
                  "modifiedDate": 1519203489541,
                  "code": "0012",
                  "hierarchy": {
                    "value": 1,
                    "label": "Global Hierarchy",
                    "description": "Global Hierarchy",
                    "listHierarchyRole": [
                      {
                        "id": "8A8108A8623D83E301623D83E52A000A",
                        "role": {
                          "id": 1,
                          "fxRole": "SAM",
                          "roleName": "SAM",
                          "description": "SAM Officer",
                          "status": "A  ",
                          "fxRoleId": 7000
                        },
                        "parentRole": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290000",
                        "role": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290003",
                        "role": {
                          "id": 3,
                          "fxRole": "Teller",
                          "roleName": "Teller",
                          "description": "Teller",
                          "status": "A  ",
                          "fxRoleId": 3002,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865554,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865554,
                              "id": "40289884628bc68c01628bdbe012000a",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865556,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865556,
                                  "id": "40289884628bc68c01628bdbe014000d",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522658803388,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522658803388,
                                    "code": "CobainSaja",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803394,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803394,
                                        "id": "402896ce62846c13016285897ec20034",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803395,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803395,
                                        "id": "402896ce62846c13016285897ec40035",
                                        "modul": {
                                          "id": "663C463ED80F382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashRequestOperation",
                                          "transactionName": "Permintaan Uang"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803391,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803391,
                                        "id": "402896ce62846c13016285897ebf0032",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803392,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803392,
                                        "id": "402896ce62846c13016285897ec10033",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000b",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL1",
                                    "listModuleGroup": [
                                      {
                                        "id": "131324",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL3",
                                    "listModuleGroup": [
                                      {
                                        "id": "1345",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865551,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865551,
                              "id": "40289884628bc68c01628bdbe00f0006",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865552,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865552,
                                  "id": "40289884628bc68c01628bdbe0100007",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTeller",
                                    "listModuleGroup": [
                                      {
                                        "id": "15",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      },
                                      {
                                        "id": "11",
                                        "modul": {
                                          "id": "663C463ED810382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashReturnOperation",
                                          "transactionName": "Penyerahan Uang"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110009",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522654631327,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522654631327,
                                    "code": "akupadamu",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631339,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631339,
                                        "id": "402896ce62846c1301628549d5ab0008",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631341,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631341,
                                        "id": "402896ce62846c1301628549d5ad000a",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220001",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitEdit",
                                          "transactionName": "Edit Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631335,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631335,
                                        "id": "402896ce62846c1301628549d5a80006",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631337,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631337,
                                        "id": "402896ce62846c1301628549d5a90007",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631343,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631343,
                                        "id": "402896ce62846c1301628549d5af000b",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631340,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631340,
                                        "id": "402896ce62846c1301628549d5ac0009",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110008",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL2",
                                    "listModuleGroup": [
                                      {
                                        "id": "13123",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290004",
                        "role": {
                          "id": 4,
                          "fxRole": "JuruBayar",
                          "roleName": "JB",
                          "description": "Juru Bayar",
                          "status": "A  ",
                          "fxRoleId": 6000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0009",
                        "role": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290001",
                        "role": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0006",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290005",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0007",
                        "role": {
                          "id": 8,
                          "fxRole": "CS",
                          "roleName": "Customer Service",
                          "description": "Customer Service",
                          "status": "A  ",
                          "fxRoleId": 2000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812322571,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812322571,
                              "id": "40289884628bc68c01628eb0030b002b",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812322571,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812322571,
                                  "id": "40289884628bc68c01628eb0030b002c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                        "role": {
                          "id": 9,
                          "fxRole": "NOCOfficer",
                          "roleName": "NOC Officer",
                          "description": "NOC Officer",
                          "status": "A  ",
                          "fxRoleId": 4001
                        },
                        "parentRole": {
                          "id": 10,
                          "fxRole": "NOCSupervisor",
                          "roleName": "NOC Supervisor",
                          "description": "NOC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4002
                        }
                      },
                      {
                        "id": "F30D2C6BC45649F69E6202AFEE374046",
                        "role": {
                          "id": 11,
                          "fxRole": "CCCOfficer",
                          "roleName": "CCC Officer",
                          "description": "CCC Officer",
                          "status": "A  ",
                          "fxRoleId": 4003
                        },
                        "parentRole": {
                          "id": 12,
                          "fxRole": "CCCSupervisor",
                          "roleName": "CCC Supervisor",
                          "description": "CCC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4004
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0008",
                        "role": {
                          "id": 15,
                          "fxRole": "BackOffice",
                          "roleName": "Back Office",
                          "description": "Back Office",
                          "status": "A  ",
                          "fxRoleId": 5000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290002",
                        "role": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "branchName": "KC BOGOR",
                  "status": "A  ",
                  "departmentId": 8001
                },
                "glNumber": "0012879100702",
                "status": "1",
                "type": "0",
                "currency": {
                  "currIsoCode": "702",
                  "symbol": "SGD",
                  "name": "Dollar",
                  "internationalName": "Singapore Dollar"
                }
              },
              {
                "createdBy": "fes.uat09",
                "createdDate": 1522295015325,
                "modifiedBy": "fes.uat09",
                "modifiedDate": 1522295015325,
                "id": "4028a893626fc38f01626fda879d0002",
                "branch": {
                  "modifiedBy": "fes.uat153",
                  "modifiedDate": 1519203489541,
                  "code": "0012",
                  "hierarchy": {
                    "value": 1,
                    "label": "Global Hierarchy",
                    "description": "Global Hierarchy",
                    "listHierarchyRole": [
                      {
                        "id": "8A8108A8623D83E301623D83E52A000A",
                        "role": {
                          "id": 1,
                          "fxRole": "SAM",
                          "roleName": "SAM",
                          "description": "SAM Officer",
                          "status": "A  ",
                          "fxRoleId": 7000
                        },
                        "parentRole": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290000",
                        "role": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290003",
                        "role": {
                          "id": 3,
                          "fxRole": "Teller",
                          "roleName": "Teller",
                          "description": "Teller",
                          "status": "A  ",
                          "fxRoleId": 3002,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865554,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865554,
                              "id": "40289884628bc68c01628bdbe012000a",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865556,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865556,
                                  "id": "40289884628bc68c01628bdbe014000d",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522658803388,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522658803388,
                                    "code": "CobainSaja",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803394,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803394,
                                        "id": "402896ce62846c13016285897ec20034",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803395,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803395,
                                        "id": "402896ce62846c13016285897ec40035",
                                        "modul": {
                                          "id": "663C463ED80F382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashRequestOperation",
                                          "transactionName": "Permintaan Uang"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803391,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803391,
                                        "id": "402896ce62846c13016285897ebf0032",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803392,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803392,
                                        "id": "402896ce62846c13016285897ec10033",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000b",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL1",
                                    "listModuleGroup": [
                                      {
                                        "id": "131324",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL3",
                                    "listModuleGroup": [
                                      {
                                        "id": "1345",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865551,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865551,
                              "id": "40289884628bc68c01628bdbe00f0006",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865552,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865552,
                                  "id": "40289884628bc68c01628bdbe0100007",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTeller",
                                    "listModuleGroup": [
                                      {
                                        "id": "15",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      },
                                      {
                                        "id": "11",
                                        "modul": {
                                          "id": "663C463ED810382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashReturnOperation",
                                          "transactionName": "Penyerahan Uang"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110009",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522654631327,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522654631327,
                                    "code": "akupadamu",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631339,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631339,
                                        "id": "402896ce62846c1301628549d5ab0008",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631341,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631341,
                                        "id": "402896ce62846c1301628549d5ad000a",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220001",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitEdit",
                                          "transactionName": "Edit Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631335,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631335,
                                        "id": "402896ce62846c1301628549d5a80006",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631337,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631337,
                                        "id": "402896ce62846c1301628549d5a90007",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631343,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631343,
                                        "id": "402896ce62846c1301628549d5af000b",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631340,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631340,
                                        "id": "402896ce62846c1301628549d5ac0009",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110008",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL2",
                                    "listModuleGroup": [
                                      {
                                        "id": "13123",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290004",
                        "role": {
                          "id": 4,
                          "fxRole": "JuruBayar",
                          "roleName": "JB",
                          "description": "Juru Bayar",
                          "status": "A  ",
                          "fxRoleId": 6000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0009",
                        "role": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290001",
                        "role": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0006",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290005",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0007",
                        "role": {
                          "id": 8,
                          "fxRole": "CS",
                          "roleName": "Customer Service",
                          "description": "Customer Service",
                          "status": "A  ",
                          "fxRoleId": 2000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812322571,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812322571,
                              "id": "40289884628bc68c01628eb0030b002b",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812322571,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812322571,
                                  "id": "40289884628bc68c01628eb0030b002c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                        "role": {
                          "id": 9,
                          "fxRole": "NOCOfficer",
                          "roleName": "NOC Officer",
                          "description": "NOC Officer",
                          "status": "A  ",
                          "fxRoleId": 4001
                        },
                        "parentRole": {
                          "id": 10,
                          "fxRole": "NOCSupervisor",
                          "roleName": "NOC Supervisor",
                          "description": "NOC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4002
                        }
                      },
                      {
                        "id": "F30D2C6BC45649F69E6202AFEE374046",
                        "role": {
                          "id": 11,
                          "fxRole": "CCCOfficer",
                          "roleName": "CCC Officer",
                          "description": "CCC Officer",
                          "status": "A  ",
                          "fxRoleId": 4003
                        },
                        "parentRole": {
                          "id": 12,
                          "fxRole": "CCCSupervisor",
                          "roleName": "CCC Supervisor",
                          "description": "CCC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4004
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0008",
                        "role": {
                          "id": 15,
                          "fxRole": "BackOffice",
                          "roleName": "Back Office",
                          "description": "Back Office",
                          "status": "A  ",
                          "fxRoleId": 5000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290002",
                        "role": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "branchName": "KC BOGOR",
                  "status": "A  ",
                  "departmentId": 8001
                },
                "glNumber": "0012879100840",
                "status": "1",
                "type": "0",
                "currency": {
                  "currIsoCode": "840",
                  "symbol": "USD",
                  "name": "Dollar",
                  "internationalName": "United State Dollar"
                }
              },
              {
                "createdBy": "fes.uat09",
                "createdDate": 1520236529958,
                "modifiedBy": "fes.uat01",
                "modifiedDate": 1523866104533,
                "id": "4028a87e61f44c110161f52889260094",
                "user": {
                  "modifiedDate": 1523873884873,
                  "id": 20,
                  "branch": {
                    "modifiedBy": "fes.uat153",
                    "modifiedDate": 1519203489541,
                    "code": "0012",
                    "hierarchy": {
                      "value": 1,
                      "label": "Global Hierarchy",
                      "description": "Global Hierarchy",
                      "listHierarchyRole": [
                        {
                          "id": "8A8108A8623D83E301623D83E52A000A",
                          "role": {
                            "id": 1,
                            "fxRole": "SAM",
                            "roleName": "SAM",
                            "description": "SAM Officer",
                            "status": "A  ",
                            "fxRoleId": 7000
                          },
                          "parentRole": {
                            "id": 5,
                            "fxRole": "SAMSPV",
                            "roleName": "SAM SPV",
                            "description": "SAM Supervisor",
                            "status": "A  ",
                            "fxRoleId": 9000,
                            "listKewenangan": [
                              {
                                "id": "124",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "id": "1234",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290000",
                          "role": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 0,
                            "fxRole": "test",
                            "roleName": "test",
                            "description": "test",
                            "status": "A  ",
                            "fxRoleId": 0
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290003",
                          "role": {
                            "id": 3,
                            "fxRole": "Teller",
                            "roleName": "Teller",
                            "description": "Teller",
                            "status": "A  ",
                            "fxRoleId": 3002,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat154",
                                "createdDate": 1522764865554,
                                "modifiedBy": "fes.uat154",
                                "modifiedDate": 1522764865554,
                                "id": "40289884628bc68c01628bdbe012000a",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865556,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865556,
                                    "id": "40289884628bc68c01628bdbe014000d",
                                    "daftarModul": {
                                      "createdBy": "fes.uat154",
                                      "createdDate": 1522658803388,
                                      "modifiedBy": "fes.uat154",
                                      "modifiedDate": 1522658803388,
                                      "code": "CobainSaja",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803394,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803394,
                                          "id": "402896ce62846c13016285897ec20034",
                                          "modul": {
                                            "id": "c514805091ea42fc8376e688f1cc7f26",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction1",
                                            "transactionName": "Payment Transaction 1"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803395,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803395,
                                          "id": "402896ce62846c13016285897ec40035",
                                          "modul": {
                                            "id": "663C463ED80F382FE0535553010A0B99",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "cashRequestOperation",
                                            "transactionName": "Permintaan Uang"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803391,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803391,
                                          "id": "402896ce62846c13016285897ebf0032",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220000",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitCreate",
                                            "transactionName": "Create Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803392,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803392,
                                          "id": "402896ce62846c13016285897ec10033",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90223456",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulCreate",
                                            "transactionName": "Create Modul"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865555,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865555,
                                    "id": "40289884628bc68c01628bdbe013000b",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL1",
                                      "listModuleGroup": [
                                        {
                                          "id": "131324",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865555,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865555,
                                    "id": "40289884628bc68c01628bdbe013000c",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL3",
                                      "listModuleGroup": [
                                        {
                                          "id": "1345",
                                          "modul": {
                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction2",
                                            "transactionName": "Payment Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              {
                                "createdBy": "fes.uat154",
                                "createdDate": 1522764865551,
                                "modifiedBy": "fes.uat154",
                                "modifiedDate": 1522764865551,
                                "id": "40289884628bc68c01628bdbe00f0006",
                                "typeKewenangan": "OPT",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865552,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865552,
                                    "id": "40289884628bc68c01628bdbe0100007",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTeller",
                                      "listModuleGroup": [
                                        {
                                          "id": "15",
                                          "modul": {
                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction2",
                                            "transactionName": "Payment Transaction 2"
                                          }
                                        },
                                        {
                                          "id": "11",
                                          "modul": {
                                            "id": "663C463ED810382FE0535553010A0B99",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "cashReturnOperation",
                                            "transactionName": "Penyerahan Uang"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865553,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865553,
                                    "id": "40289884628bc68c01628bdbe0110009",
                                    "daftarModul": {
                                      "createdBy": "fes.uat154",
                                      "createdDate": 1522654631327,
                                      "modifiedBy": "fes.uat154",
                                      "modifiedDate": 1522654631327,
                                      "code": "akupadamu",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631339,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631339,
                                          "id": "402896ce62846c1301628549d5ab0008",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631341,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631341,
                                          "id": "402896ce62846c1301628549d5ad000a",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220001",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitEdit",
                                            "transactionName": "Edit Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631335,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631335,
                                          "id": "402896ce62846c1301628549d5a80006",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220000",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitCreate",
                                            "transactionName": "Create Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631337,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631337,
                                          "id": "402896ce62846c1301628549d5a90007",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90223456",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulCreate",
                                            "transactionName": "Create Modul"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631343,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631343,
                                          "id": "402896ce62846c1301628549d5af000b",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631340,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631340,
                                          "id": "402896ce62846c1301628549d5ac0009",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865553,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865553,
                                    "id": "40289884628bc68c01628bdbe0110008",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL2",
                                      "listModuleGroup": [
                                        {
                                          "id": "13123",
                                          "modul": {
                                            "id": "c514805091ea42fc8376e688f1cc7f26",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction1",
                                            "transactionName": "Payment Transaction 1"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290004",
                          "role": {
                            "id": 4,
                            "fxRole": "JuruBayar",
                            "roleName": "JB",
                            "description": "Juru Bayar",
                            "status": "A  ",
                            "fxRoleId": 6000
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0009",
                          "role": {
                            "id": 5,
                            "fxRole": "SAMSPV",
                            "roleName": "SAM SPV",
                            "description": "SAM Supervisor",
                            "status": "A  ",
                            "fxRoleId": 9000,
                            "listKewenangan": [
                              {
                                "id": "124",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "id": "1234",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 0,
                            "fxRole": "test",
                            "roleName": "test",
                            "description": "test",
                            "status": "A  ",
                            "fxRoleId": 0
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290001",
                          "role": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0006",
                          "role": {
                            "id": 7,
                            "fxRole": "CST",
                            "roleName": "CST",
                            "description": "CS and TELLER",
                            "status": "A  ",
                            "fxRoleId": 8000
                          },
                          "parentRole": {
                            "id": 16,
                            "fxRole": "CSSupervisor",
                            "roleName": "CS Supervisor",
                            "description": "CS Supervisor",
                            "status": "A  ",
                            "fxRoleId": 3001
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290005",
                          "role": {
                            "id": 7,
                            "fxRole": "CST",
                            "roleName": "CST",
                            "description": "CS and TELLER",
                            "status": "A  ",
                            "fxRoleId": 8000
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0007",
                          "role": {
                            "id": 8,
                            "fxRole": "CS",
                            "roleName": "Customer Service",
                            "description": "Customer Service",
                            "status": "A  ",
                            "fxRoleId": 2000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812322571,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812322571,
                                "id": "40289884628bc68c01628eb0030b002b",
                                "typeKewenangan": "OPT",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812322571,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812322571,
                                    "id": "40289884628bc68c01628eb0030b002c",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                          "role": {
                            "id": 9,
                            "fxRole": "NOCOfficer",
                            "roleName": "NOC Officer",
                            "description": "NOC Officer",
                            "status": "A  ",
                            "fxRoleId": 4001
                          },
                          "parentRole": {
                            "id": 10,
                            "fxRole": "NOCSupervisor",
                            "roleName": "NOC Supervisor",
                            "description": "NOC Supervisor",
                            "status": "A  ",
                            "fxRoleId": 4002
                          }
                        },
                        {
                          "id": "F30D2C6BC45649F69E6202AFEE374046",
                          "role": {
                            "id": 11,
                            "fxRole": "CCCOfficer",
                            "roleName": "CCC Officer",
                            "description": "CCC Officer",
                            "status": "A  ",
                            "fxRoleId": 4003
                          },
                          "parentRole": {
                            "id": 12,
                            "fxRole": "CCCSupervisor",
                            "roleName": "CCC Supervisor",
                            "description": "CCC Supervisor",
                            "status": "A  ",
                            "fxRoleId": 4004
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0008",
                          "role": {
                            "id": 15,
                            "fxRole": "BackOffice",
                            "roleName": "Back Office",
                            "description": "Back Office",
                            "status": "A  ",
                            "fxRoleId": 5000
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290002",
                          "role": {
                            "id": 16,
                            "fxRole": "CSSupervisor",
                            "roleName": "CS Supervisor",
                            "description": "CS Supervisor",
                            "status": "A  ",
                            "fxRoleId": 3001
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "branchName": "KC BOGOR",
                    "status": "A  ",
                    "departmentId": 8001
                  },
                  "limit": {
                    "code": 13,
                    "currency": {
                      "currIsoCode": "360",
                      "symbol": "IDR",
                      "name": "Rupiah",
                      "internationalName": "Indonesian Rupiah"
                    },
                    "role": {
                      "id": 6,
                      "fxRole": "HT",
                      "roleName": "HT",
                      "description": "Head Teller",
                      "status": "A  ",
                      "fxRoleId": 3000
                    },
                    "typeDescription": "Junior",
                    "amountCredit": 50000000,
                    "amountDebit": 100000000
                  },
                  "userRoles": [
                    {
                      "id": "8A810893618DD9AA01618DD9AB1C0019",
                      "role": {
                        "id": 6,
                        "fxRole": "HT",
                        "roleName": "HT",
                        "description": "Head Teller",
                        "status": "A  ",
                        "fxRoleId": 3000
                      }
                    }
                  ],
                  "userName": "fes.uat01",
                  "fullName": "0012 - HEAD TELLER 1",
                  "loginType": "U",
                  "email": "IGedePutu.AryPradnyana@dev.corp.btpn.co.id",
                  "status": "A  ",
                  "employeeId": 10003,
                  "userAccountId": 10003,
                  "fxUserId": 10003,
                  "lastLogin": 1523873884871,
                  "interbranchFlag": "Y",
                  "schedVal": "{\"id\":0}"
                },
                "branch": {
                  "modifiedBy": "fes.uat153",
                  "modifiedDate": 1519203489541,
                  "code": "0012",
                  "hierarchy": {
                    "value": 1,
                    "label": "Global Hierarchy",
                    "description": "Global Hierarchy",
                    "listHierarchyRole": [
                      {
                        "id": "8A8108A8623D83E301623D83E52A000A",
                        "role": {
                          "id": 1,
                          "fxRole": "SAM",
                          "roleName": "SAM",
                          "description": "SAM Officer",
                          "status": "A  ",
                          "fxRoleId": 7000
                        },
                        "parentRole": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290000",
                        "role": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290003",
                        "role": {
                          "id": 3,
                          "fxRole": "Teller",
                          "roleName": "Teller",
                          "description": "Teller",
                          "status": "A  ",
                          "fxRoleId": 3002,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865554,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865554,
                              "id": "40289884628bc68c01628bdbe012000a",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865556,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865556,
                                  "id": "40289884628bc68c01628bdbe014000d",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522658803388,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522658803388,
                                    "code": "CobainSaja",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803394,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803394,
                                        "id": "402896ce62846c13016285897ec20034",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803395,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803395,
                                        "id": "402896ce62846c13016285897ec40035",
                                        "modul": {
                                          "id": "663C463ED80F382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashRequestOperation",
                                          "transactionName": "Permintaan Uang"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803391,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803391,
                                        "id": "402896ce62846c13016285897ebf0032",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803392,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803392,
                                        "id": "402896ce62846c13016285897ec10033",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000b",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL1",
                                    "listModuleGroup": [
                                      {
                                        "id": "131324",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL3",
                                    "listModuleGroup": [
                                      {
                                        "id": "1345",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865551,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865551,
                              "id": "40289884628bc68c01628bdbe00f0006",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865552,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865552,
                                  "id": "40289884628bc68c01628bdbe0100007",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTeller",
                                    "listModuleGroup": [
                                      {
                                        "id": "15",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      },
                                      {
                                        "id": "11",
                                        "modul": {
                                          "id": "663C463ED810382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashReturnOperation",
                                          "transactionName": "Penyerahan Uang"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110009",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522654631327,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522654631327,
                                    "code": "akupadamu",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631339,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631339,
                                        "id": "402896ce62846c1301628549d5ab0008",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631341,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631341,
                                        "id": "402896ce62846c1301628549d5ad000a",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220001",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitEdit",
                                          "transactionName": "Edit Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631335,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631335,
                                        "id": "402896ce62846c1301628549d5a80006",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631337,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631337,
                                        "id": "402896ce62846c1301628549d5a90007",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631343,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631343,
                                        "id": "402896ce62846c1301628549d5af000b",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631340,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631340,
                                        "id": "402896ce62846c1301628549d5ac0009",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110008",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL2",
                                    "listModuleGroup": [
                                      {
                                        "id": "13123",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290004",
                        "role": {
                          "id": 4,
                          "fxRole": "JuruBayar",
                          "roleName": "JB",
                          "description": "Juru Bayar",
                          "status": "A  ",
                          "fxRoleId": 6000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0009",
                        "role": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290001",
                        "role": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0006",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290005",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0007",
                        "role": {
                          "id": 8,
                          "fxRole": "CS",
                          "roleName": "Customer Service",
                          "description": "Customer Service",
                          "status": "A  ",
                          "fxRoleId": 2000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812322571,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812322571,
                              "id": "40289884628bc68c01628eb0030b002b",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812322571,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812322571,
                                  "id": "40289884628bc68c01628eb0030b002c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                        "role": {
                          "id": 9,
                          "fxRole": "NOCOfficer",
                          "roleName": "NOC Officer",
                          "description": "NOC Officer",
                          "status": "A  ",
                          "fxRoleId": 4001
                        },
                        "parentRole": {
                          "id": 10,
                          "fxRole": "NOCSupervisor",
                          "roleName": "NOC Supervisor",
                          "description": "NOC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4002
                        }
                      },
                      {
                        "id": "F30D2C6BC45649F69E6202AFEE374046",
                        "role": {
                          "id": 11,
                          "fxRole": "CCCOfficer",
                          "roleName": "CCC Officer",
                          "description": "CCC Officer",
                          "status": "A  ",
                          "fxRoleId": 4003
                        },
                        "parentRole": {
                          "id": 12,
                          "fxRole": "CCCSupervisor",
                          "roleName": "CCC Supervisor",
                          "description": "CCC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4004
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0008",
                        "role": {
                          "id": 15,
                          "fxRole": "BackOffice",
                          "roleName": "Back Office",
                          "description": "Back Office",
                          "status": "A  ",
                          "fxRoleId": 5000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290002",
                        "role": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "branchName": "KC BOGOR",
                  "status": "A  ",
                  "departmentId": 8001
                },
                "glNumber": "0012879101360",
                "status": "0",
                "type": "1",
                "currency": {
                  "currIsoCode": "360",
                  "symbol": "IDR",
                  "name": "Rupiah",
                  "internationalName": "Indonesian Rupiah"
                },
                "lastClosed": 1523865977229
              },
              {
                "createdBy": "fes.uat09",
                "createdDate": 1520236565451,
                "modifiedBy": "fes.uat02",
                "modifiedDate": 1523329690947,
                "id": "4028a87e61f44c110161f52913cb0097",
                "user": {
                  "modifiedBy": "fes.uat153",
                  "modifiedDate": 1523610117575,
                  "id": 41,
                  "branch": {
                    "modifiedBy": "fes.uat153",
                    "modifiedDate": 1519203489541,
                    "code": "0012",
                    "hierarchy": {
                      "value": 1,
                      "label": "Global Hierarchy",
                      "description": "Global Hierarchy",
                      "listHierarchyRole": [
                        {
                          "id": "8A8108A8623D83E301623D83E52A000A",
                          "role": {
                            "id": 1,
                            "fxRole": "SAM",
                            "roleName": "SAM",
                            "description": "SAM Officer",
                            "status": "A  ",
                            "fxRoleId": 7000
                          },
                          "parentRole": {
                            "id": 5,
                            "fxRole": "SAMSPV",
                            "roleName": "SAM SPV",
                            "description": "SAM Supervisor",
                            "status": "A  ",
                            "fxRoleId": 9000,
                            "listKewenangan": [
                              {
                                "id": "124",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "id": "1234",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290000",
                          "role": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 0,
                            "fxRole": "test",
                            "roleName": "test",
                            "description": "test",
                            "status": "A  ",
                            "fxRoleId": 0
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290003",
                          "role": {
                            "id": 3,
                            "fxRole": "Teller",
                            "roleName": "Teller",
                            "description": "Teller",
                            "status": "A  ",
                            "fxRoleId": 3002,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat154",
                                "createdDate": 1522764865554,
                                "modifiedBy": "fes.uat154",
                                "modifiedDate": 1522764865554,
                                "id": "40289884628bc68c01628bdbe012000a",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865556,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865556,
                                    "id": "40289884628bc68c01628bdbe014000d",
                                    "daftarModul": {
                                      "createdBy": "fes.uat154",
                                      "createdDate": 1522658803388,
                                      "modifiedBy": "fes.uat154",
                                      "modifiedDate": 1522658803388,
                                      "code": "CobainSaja",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803394,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803394,
                                          "id": "402896ce62846c13016285897ec20034",
                                          "modul": {
                                            "id": "c514805091ea42fc8376e688f1cc7f26",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction1",
                                            "transactionName": "Payment Transaction 1"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803395,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803395,
                                          "id": "402896ce62846c13016285897ec40035",
                                          "modul": {
                                            "id": "663C463ED80F382FE0535553010A0B99",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "cashRequestOperation",
                                            "transactionName": "Permintaan Uang"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803391,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803391,
                                          "id": "402896ce62846c13016285897ebf0032",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220000",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitCreate",
                                            "transactionName": "Create Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522658803392,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522658803392,
                                          "id": "402896ce62846c13016285897ec10033",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90223456",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulCreate",
                                            "transactionName": "Create Modul"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865555,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865555,
                                    "id": "40289884628bc68c01628bdbe013000b",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL1",
                                      "listModuleGroup": [
                                        {
                                          "id": "131324",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865555,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865555,
                                    "id": "40289884628bc68c01628bdbe013000c",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL3",
                                      "listModuleGroup": [
                                        {
                                          "id": "1345",
                                          "modul": {
                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction2",
                                            "transactionName": "Payment Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              },
                              {
                                "createdBy": "fes.uat154",
                                "createdDate": 1522764865551,
                                "modifiedBy": "fes.uat154",
                                "modifiedDate": 1522764865551,
                                "id": "40289884628bc68c01628bdbe00f0006",
                                "typeKewenangan": "OPT",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865552,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865552,
                                    "id": "40289884628bc68c01628bdbe0100007",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTeller",
                                      "listModuleGroup": [
                                        {
                                          "id": "15",
                                          "modul": {
                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction2",
                                            "transactionName": "Payment Transaction 2"
                                          }
                                        },
                                        {
                                          "id": "11",
                                          "modul": {
                                            "id": "663C463ED810382FE0535553010A0B99",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "cashReturnOperation",
                                            "transactionName": "Penyerahan Uang"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865553,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865553,
                                    "id": "40289884628bc68c01628bdbe0110009",
                                    "daftarModul": {
                                      "createdBy": "fes.uat154",
                                      "createdDate": 1522654631327,
                                      "modifiedBy": "fes.uat154",
                                      "modifiedDate": 1522654631327,
                                      "code": "akupadamu",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631339,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631339,
                                          "id": "402896ce62846c1301628549d5ab0008",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631341,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631341,
                                          "id": "402896ce62846c1301628549d5ad000a",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220001",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitEdit",
                                            "transactionName": "Edit Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631335,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631335,
                                          "id": "402896ce62846c1301628549d5a80006",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220000",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitCreate",
                                            "transactionName": "Create Limit"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631337,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631337,
                                          "id": "402896ce62846c1301628549d5a90007",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90223456",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulCreate",
                                            "transactionName": "Create Modul"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631343,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631343,
                                          "id": "402896ce62846c1301628549d5af000b",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat154",
                                          "createdDate": 1522654631340,
                                          "modifiedBy": "fes.uat154",
                                          "modifiedDate": 1522654631340,
                                          "id": "402896ce62846c1301628549d5ac0009",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522764865553,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522764865553,
                                    "id": "40289884628bc68c01628bdbe0110008",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlTL2",
                                      "listModuleGroup": [
                                        {
                                          "id": "13123",
                                          "modul": {
                                            "id": "c514805091ea42fc8376e688f1cc7f26",
                                            "moduleCode": "0002",
                                            "moduleName": "Payment",
                                            "transactionType": "PaymentTransaction1",
                                            "transactionName": "Payment Transaction 1"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290004",
                          "role": {
                            "id": 4,
                            "fxRole": "JuruBayar",
                            "roleName": "JB",
                            "description": "Juru Bayar",
                            "status": "A  ",
                            "fxRoleId": 6000
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0009",
                          "role": {
                            "id": 5,
                            "fxRole": "SAMSPV",
                            "roleName": "SAM SPV",
                            "description": "SAM Supervisor",
                            "status": "A  ",
                            "fxRoleId": 9000,
                            "listKewenangan": [
                              {
                                "id": "124",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "id": "1234",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 0,
                            "fxRole": "test",
                            "roleName": "test",
                            "description": "test",
                            "status": "A  ",
                            "fxRoleId": 0
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290001",
                          "role": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0006",
                          "role": {
                            "id": 7,
                            "fxRole": "CST",
                            "roleName": "CST",
                            "description": "CS and TELLER",
                            "status": "A  ",
                            "fxRoleId": 8000
                          },
                          "parentRole": {
                            "id": 16,
                            "fxRole": "CSSupervisor",
                            "roleName": "CS Supervisor",
                            "description": "CS Supervisor",
                            "status": "A  ",
                            "fxRoleId": 3001
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290005",
                          "role": {
                            "id": 7,
                            "fxRole": "CST",
                            "roleName": "CST",
                            "description": "CS and TELLER",
                            "status": "A  ",
                            "fxRoleId": 8000
                          },
                          "parentRole": {
                            "id": 6,
                            "fxRole": "HT",
                            "roleName": "HT",
                            "description": "Head Teller",
                            "status": "A  ",
                            "fxRoleId": 3000
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0007",
                          "role": {
                            "id": 8,
                            "fxRole": "CS",
                            "roleName": "Customer Service",
                            "description": "Customer Service",
                            "status": "A  ",
                            "fxRoleId": 2000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812322571,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812322571,
                                "id": "40289884628bc68c01628eb0030b002b",
                                "typeKewenangan": "OPT",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812322571,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812322571,
                                    "id": "40289884628bc68c01628eb0030b002c",
                                    "daftarModul": {
                                      "createdBy": "SYSTEM",
                                      "createdDate": 1521392400000,
                                      "modifiedBy": "SYSTEM",
                                      "modifiedDate": 1521392400000,
                                      "code": "MdlSAM",
                                      "listModuleGroup": [
                                        {
                                          "id": "7",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220002",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "LimitDelete",
                                            "transactionName": "Delete Limit"
                                          }
                                        },
                                        {
                                          "id": "1",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90220987",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulEdit",
                                            "transactionName": "Edit Modul"
                                          }
                                        },
                                        {
                                          "id": "5",
                                          "modul": {
                                            "id": "8a8108c16219de8f016219de90221872",
                                            "moduleCode": "0004",
                                            "moduleName": "User Management",
                                            "transactionType": "ModulDelete",
                                            "transactionName": "Delete Modul"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                          "role": {
                            "id": 9,
                            "fxRole": "NOCOfficer",
                            "roleName": "NOC Officer",
                            "description": "NOC Officer",
                            "status": "A  ",
                            "fxRoleId": 4001
                          },
                          "parentRole": {
                            "id": 10,
                            "fxRole": "NOCSupervisor",
                            "roleName": "NOC Supervisor",
                            "description": "NOC Supervisor",
                            "status": "A  ",
                            "fxRoleId": 4002
                          }
                        },
                        {
                          "id": "F30D2C6BC45649F69E6202AFEE374046",
                          "role": {
                            "id": 11,
                            "fxRole": "CCCOfficer",
                            "roleName": "CCC Officer",
                            "description": "CCC Officer",
                            "status": "A  ",
                            "fxRoleId": 4003
                          },
                          "parentRole": {
                            "id": 12,
                            "fxRole": "CCCSupervisor",
                            "roleName": "CCC Supervisor",
                            "description": "CCC Supervisor",
                            "status": "A  ",
                            "fxRoleId": 4004
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E52A0008",
                          "role": {
                            "id": 15,
                            "fxRole": "BackOffice",
                            "roleName": "Back Office",
                            "description": "Back Office",
                            "status": "A  ",
                            "fxRoleId": 5000
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "id": "8A8108A8623D83E301623D83E5290002",
                          "role": {
                            "id": 16,
                            "fxRole": "CSSupervisor",
                            "roleName": "CS Supervisor",
                            "description": "CS Supervisor",
                            "status": "A  ",
                            "fxRoleId": 3001
                          },
                          "parentRole": {
                            "id": 2,
                            "fxRole": "BranchManager",
                            "roleName": "BH",
                            "description": "Branch Head",
                            "status": "A  ",
                            "fxRoleId": 1000,
                            "listKewenangan": [
                              {
                                "createdBy": "fes.uat153",
                                "createdDate": 1522812282705,
                                "modifiedBy": "fes.uat153",
                                "modifiedDate": 1522812282705,
                                "id": "40289884628bc68c01628eaf67510029",
                                "typeKewenangan": "OTR",
                                "listModulKewenangan": [
                                  {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522812282706,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522812282706,
                                    "id": "40289884628bc68c01628eaf6752002a",
                                    "daftarModul": {
                                      "createdBy": "fes.uat153",
                                      "createdDate": 1522811765047,
                                      "modifiedBy": "fes.uat153",
                                      "modifiedDate": 1522811765047,
                                      "code": "testCreate",
                                      "listModuleGroup": [
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765052,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765052,
                                          "id": "40289884628bc68c01628ea7813c0022",
                                          "modul": {
                                            "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCis",
                                            "transactionName": "Overlimit CIS"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765054,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765054,
                                          "id": "40289884628bc68c01628ea7813e0023",
                                          "modul": {
                                            "id": "0ded15405d8c4479a43d631ab1f4964e",
                                            "moduleCode": "0001",
                                            "moduleName": "Cash Management",
                                            "transactionType": "overlimitCicb",
                                            "transactionName": "Overlimit CICB"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765059,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765059,
                                          "id": "40289884628bc68c01628ea781430024",
                                          "modul": {
                                            "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFMaintenance",
                                            "transactionName": "CIF Maintenance"
                                          }
                                        },
                                        {
                                          "createdBy": "fes.uat153",
                                          "createdDate": 1522811765063,
                                          "modifiedBy": "fes.uat153",
                                          "modifiedDate": 1522811765063,
                                          "id": "40289884628bc68c01628ea781470025",
                                          "modul": {
                                            "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                            "moduleCode": "0003",
                                            "moduleName": "CIF Maintenance",
                                            "transactionType": "CIFTransaction2",
                                            "transactionName": "CIF Transaction 2"
                                          }
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "branchName": "KC BOGOR",
                    "status": "A  ",
                    "departmentId": 8001
                  },
                  "limit": {
                    "code": 13,
                    "currency": {
                      "currIsoCode": "360",
                      "symbol": "IDR",
                      "name": "Rupiah",
                      "internationalName": "Indonesian Rupiah"
                    },
                    "role": {
                      "id": 6,
                      "fxRole": "HT",
                      "roleName": "HT",
                      "description": "Head Teller",
                      "status": "A  ",
                      "fxRoleId": 3000
                    },
                    "typeDescription": "Junior",
                    "amountCredit": 50000000,
                    "amountDebit": 100000000
                  },
                  "userRoles": [
                    {
                      "id": "8A810893618DD9AA01618DD9AB1C0040",
                      "role": {
                        "id": 6,
                        "fxRole": "HT",
                        "roleName": "HT",
                        "description": "Head Teller",
                        "status": "A  ",
                        "fxRoleId": 3000
                      }
                    }
                  ],
                  "userName": "fes.uat02",
                  "fullName": "0012 - HEAD TELLER 2",
                  "loginType": "U",
                  "email": "IGedePutu.AryPradnyana@dev.corp.btpn.co.id",
                  "status": "A  ",
                  "employeeId": 11003,
                  "userAccountId": 11003,
                  "fxUserId": 11003,
                  "lastLogin": 1523608678247,
                  "interbranchFlag": "Y",
                  "schedVal": "{\"id\":0}"
                },
                "branch": {
                  "modifiedBy": "fes.uat153",
                  "modifiedDate": 1519203489541,
                  "code": "0012",
                  "hierarchy": {
                    "value": 1,
                    "label": "Global Hierarchy",
                    "description": "Global Hierarchy",
                    "listHierarchyRole": [
                      {
                        "id": "8A8108A8623D83E301623D83E52A000A",
                        "role": {
                          "id": 1,
                          "fxRole": "SAM",
                          "roleName": "SAM",
                          "description": "SAM Officer",
                          "status": "A  ",
                          "fxRoleId": 7000
                        },
                        "parentRole": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290000",
                        "role": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290003",
                        "role": {
                          "id": 3,
                          "fxRole": "Teller",
                          "roleName": "Teller",
                          "description": "Teller",
                          "status": "A  ",
                          "fxRoleId": 3002,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865554,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865554,
                              "id": "40289884628bc68c01628bdbe012000a",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865556,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865556,
                                  "id": "40289884628bc68c01628bdbe014000d",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522658803388,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522658803388,
                                    "code": "CobainSaja",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803394,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803394,
                                        "id": "402896ce62846c13016285897ec20034",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803395,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803395,
                                        "id": "402896ce62846c13016285897ec40035",
                                        "modul": {
                                          "id": "663C463ED80F382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashRequestOperation",
                                          "transactionName": "Permintaan Uang"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803391,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803391,
                                        "id": "402896ce62846c13016285897ebf0032",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522658803392,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522658803392,
                                        "id": "402896ce62846c13016285897ec10033",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000b",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL1",
                                    "listModuleGroup": [
                                      {
                                        "id": "131324",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865555,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865555,
                                  "id": "40289884628bc68c01628bdbe013000c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL3",
                                    "listModuleGroup": [
                                      {
                                        "id": "1345",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "createdBy": "fes.uat154",
                              "createdDate": 1522764865551,
                              "modifiedBy": "fes.uat154",
                              "modifiedDate": 1522764865551,
                              "id": "40289884628bc68c01628bdbe00f0006",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865552,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865552,
                                  "id": "40289884628bc68c01628bdbe0100007",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTeller",
                                    "listModuleGroup": [
                                      {
                                        "id": "15",
                                        "modul": {
                                          "id": "5b34c1355b224a0a92986367f88aef80",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction2",
                                          "transactionName": "Payment Transaction 2"
                                        }
                                      },
                                      {
                                        "id": "11",
                                        "modul": {
                                          "id": "663C463ED810382FE0535553010A0B99",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "cashReturnOperation",
                                          "transactionName": "Penyerahan Uang"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110009",
                                  "daftarModul": {
                                    "createdBy": "fes.uat154",
                                    "createdDate": 1522654631327,
                                    "modifiedBy": "fes.uat154",
                                    "modifiedDate": 1522654631327,
                                    "code": "akupadamu",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631339,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631339,
                                        "id": "402896ce62846c1301628549d5ab0008",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631341,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631341,
                                        "id": "402896ce62846c1301628549d5ad000a",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220001",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitEdit",
                                          "transactionName": "Edit Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631335,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631335,
                                        "id": "402896ce62846c1301628549d5a80006",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220000",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitCreate",
                                          "transactionName": "Create Limit"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631337,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631337,
                                        "id": "402896ce62846c1301628549d5a90007",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90223456",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulCreate",
                                          "transactionName": "Create Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631343,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631343,
                                        "id": "402896ce62846c1301628549d5af000b",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat154",
                                        "createdDate": 1522654631340,
                                        "modifiedBy": "fes.uat154",
                                        "modifiedDate": 1522654631340,
                                        "id": "402896ce62846c1301628549d5ac0009",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                },
                                {
                                  "createdBy": "fes.uat154",
                                  "createdDate": 1522764865553,
                                  "modifiedBy": "fes.uat154",
                                  "modifiedDate": 1522764865553,
                                  "id": "40289884628bc68c01628bdbe0110008",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlTL2",
                                    "listModuleGroup": [
                                      {
                                        "id": "13123",
                                        "modul": {
                                          "id": "c514805091ea42fc8376e688f1cc7f26",
                                          "moduleCode": "0002",
                                          "moduleName": "Payment",
                                          "transactionType": "PaymentTransaction1",
                                          "transactionName": "Payment Transaction 1"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290004",
                        "role": {
                          "id": 4,
                          "fxRole": "JuruBayar",
                          "roleName": "JB",
                          "description": "Juru Bayar",
                          "status": "A  ",
                          "fxRoleId": 6000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0009",
                        "role": {
                          "id": 5,
                          "fxRole": "SAMSPV",
                          "roleName": "SAM SPV",
                          "description": "SAM Supervisor",
                          "status": "A  ",
                          "fxRoleId": 9000,
                          "listKewenangan": [
                            {
                              "id": "124",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "id": "1234",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 0,
                          "fxRole": "test",
                          "roleName": "test",
                          "description": "test",
                          "status": "A  ",
                          "fxRoleId": 0
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290001",
                        "role": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0006",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290005",
                        "role": {
                          "id": 7,
                          "fxRole": "CST",
                          "roleName": "CST",
                          "description": "CS and TELLER",
                          "status": "A  ",
                          "fxRoleId": 8000
                        },
                        "parentRole": {
                          "id": 6,
                          "fxRole": "HT",
                          "roleName": "HT",
                          "description": "Head Teller",
                          "status": "A  ",
                          "fxRoleId": 3000
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0007",
                        "role": {
                          "id": 8,
                          "fxRole": "CS",
                          "roleName": "Customer Service",
                          "description": "Customer Service",
                          "status": "A  ",
                          "fxRoleId": 2000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812322571,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812322571,
                              "id": "40289884628bc68c01628eb0030b002b",
                              "typeKewenangan": "OPT",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812322571,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812322571,
                                  "id": "40289884628bc68c01628eb0030b002c",
                                  "daftarModul": {
                                    "createdBy": "SYSTEM",
                                    "createdDate": 1521392400000,
                                    "modifiedBy": "SYSTEM",
                                    "modifiedDate": 1521392400000,
                                    "code": "MdlSAM",
                                    "listModuleGroup": [
                                      {
                                        "id": "7",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220002",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "LimitDelete",
                                          "transactionName": "Delete Limit"
                                        }
                                      },
                                      {
                                        "id": "1",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90220987",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulEdit",
                                          "transactionName": "Edit Modul"
                                        }
                                      },
                                      {
                                        "id": "5",
                                        "modul": {
                                          "id": "8a8108c16219de8f016219de90221872",
                                          "moduleCode": "0004",
                                          "moduleName": "User Management",
                                          "transactionType": "ModulDelete",
                                          "transactionName": "Delete Modul"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "D143E2DF6D6B471383DA1D0EC64172AA",
                        "role": {
                          "id": 9,
                          "fxRole": "NOCOfficer",
                          "roleName": "NOC Officer",
                          "description": "NOC Officer",
                          "status": "A  ",
                          "fxRoleId": 4001
                        },
                        "parentRole": {
                          "id": 10,
                          "fxRole": "NOCSupervisor",
                          "roleName": "NOC Supervisor",
                          "description": "NOC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4002
                        }
                      },
                      {
                        "id": "F30D2C6BC45649F69E6202AFEE374046",
                        "role": {
                          "id": 11,
                          "fxRole": "CCCOfficer",
                          "roleName": "CCC Officer",
                          "description": "CCC Officer",
                          "status": "A  ",
                          "fxRoleId": 4003
                        },
                        "parentRole": {
                          "id": 12,
                          "fxRole": "CCCSupervisor",
                          "roleName": "CCC Supervisor",
                          "description": "CCC Supervisor",
                          "status": "A  ",
                          "fxRoleId": 4004
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E52A0008",
                        "role": {
                          "id": 15,
                          "fxRole": "BackOffice",
                          "roleName": "Back Office",
                          "description": "Back Office",
                          "status": "A  ",
                          "fxRoleId": 5000
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "id": "8A8108A8623D83E301623D83E5290002",
                        "role": {
                          "id": 16,
                          "fxRole": "CSSupervisor",
                          "roleName": "CS Supervisor",
                          "description": "CS Supervisor",
                          "status": "A  ",
                          "fxRoleId": 3001
                        },
                        "parentRole": {
                          "id": 2,
                          "fxRole": "BranchManager",
                          "roleName": "BH",
                          "description": "Branch Head",
                          "status": "A  ",
                          "fxRoleId": 1000,
                          "listKewenangan": [
                            {
                              "createdBy": "fes.uat153",
                              "createdDate": 1522812282705,
                              "modifiedBy": "fes.uat153",
                              "modifiedDate": 1522812282705,
                              "id": "40289884628bc68c01628eaf67510029",
                              "typeKewenangan": "OTR",
                              "listModulKewenangan": [
                                {
                                  "createdBy": "fes.uat153",
                                  "createdDate": 1522812282706,
                                  "modifiedBy": "fes.uat153",
                                  "modifiedDate": 1522812282706,
                                  "id": "40289884628bc68c01628eaf6752002a",
                                  "daftarModul": {
                                    "createdBy": "fes.uat153",
                                    "createdDate": 1522811765047,
                                    "modifiedBy": "fes.uat153",
                                    "modifiedDate": 1522811765047,
                                    "code": "testCreate",
                                    "listModuleGroup": [
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765052,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765052,
                                        "id": "40289884628bc68c01628ea7813c0022",
                                        "modul": {
                                          "id": "8261b9426e8e4135aa6a08e4cba10f57",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCis",
                                          "transactionName": "Overlimit CIS"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765054,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765054,
                                        "id": "40289884628bc68c01628ea7813e0023",
                                        "modul": {
                                          "id": "0ded15405d8c4479a43d631ab1f4964e",
                                          "moduleCode": "0001",
                                          "moduleName": "Cash Management",
                                          "transactionType": "overlimitCicb",
                                          "transactionName": "Overlimit CICB"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765059,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765059,
                                        "id": "40289884628bc68c01628ea781430024",
                                        "modul": {
                                          "id": "cc0e58b2f6bc43adbb4e0637b1186933",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFMaintenance",
                                          "transactionName": "CIF Maintenance"
                                        }
                                      },
                                      {
                                        "createdBy": "fes.uat153",
                                        "createdDate": 1522811765063,
                                        "modifiedBy": "fes.uat153",
                                        "modifiedDate": 1522811765063,
                                        "id": "40289884628bc68c01628ea781470025",
                                        "modul": {
                                          "id": "c6b3bdecb2aa4598861c91d344fd1b06",
                                          "moduleCode": "0003",
                                          "moduleName": "CIF Maintenance",
                                          "transactionType": "CIFTransaction2",
                                          "transactionName": "CIF Transaction 2"
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "branchName": "KC BOGOR",
                  "status": "A  ",
                  "departmentId": 8001
                },
                "glNumber": "0012879102360",
                "status": "0",
                "type": "1",
                "currency": {
                  "currIsoCode": "360",
                  "symbol": "IDR",
                  "name": "Rupiah",
                  "internationalName": "Indonesian Rupiah"
                },
                "lastClosed": 1523329575041
              }
            ],
            "page": 0,
            "rowPerPage": 20,
            "totalData": 6,
            "startRow": 0,
            "totalPage": 1
          }
        })
    });

    app.get('/branch/information/:cif', function (req, res) {
        res.json({
            "responseStatus": {
                "responseCode": "00",
                "responseDesc": "SUCCESS"
            },
            "paging": {
                "data": [
                    {
                        "createdBy": "fes.uat143",
                        "createdDate": 1520224687455,
                        "modifiedBy": "fes.uat161",
                        "modifiedDate": 1522134070734,
                        "id": "4028a87e61f44c110161f473d55f0043",
                        "user": {
                            "modifiedDate": 1522134051664,
                            "id": 81,
                            "branch": {
                                "code": "0015",
                                "hierarchy": {
                                    "value": 1,
                                    "label": "Global Hierarchy",
                                    "description": "Global Hierarchy",
                                    "listHierarchyRole": [
                                        {
                                            "id": "8A8108A8623D83E301623D83E52A000A",
                                            "role": {
                                                "id": 1,
                                                "fxRole": "SAM",
                                                "roleName": "SAM",
                                                "description": "SAM Officer",
                                                "status": "A ",
                                                "fxRoleId": 7000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "123",
                                                        "typeKewenangan": "OPT",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "123",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlSAM",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "1",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90220987",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "ModulEdit",
                                                                                "transactionName": "Edit Modul"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "5",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90221872",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "ModulDelete",
                                                                                "transactionName": "Delete Modul"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "7",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90220002",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "LimitDelete",
                                                                                "transactionName": "Delete Limit"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "parentRole": {
                                                "id": 5,
                                                "fxRole": "SAMSPV",
                                                "roleName": "SAM SPV",
                                                "description": "SAM Supervisor",
                                                "status": "A ",
                                                "fxRoleId": 9000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "124",
                                                        "typeKewenangan": "OTR",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "1234",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlSAM",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "1",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90220987",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "ModulEdit",
                                                                                "transactionName": "Edit Modul"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "5",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90221872",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "ModulDelete",
                                                                                "transactionName": "Delete Modul"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "7",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90220002",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "LimitDelete",
                                                                                "transactionName": "Delete Limit"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E5290000",
                                            "role": {
                                                "id": 2,
                                                "fxRole": "BranchManager",
                                                "roleName": "BH",
                                                "description": "Branch Head",
                                                "status": "A ",
                                                "fxRoleId": 1000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "134",
                                                        "typeKewenangan": "OTR",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "12345",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlTeller",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "11",
                                                                            "modul": {
                                                                                "id": "663C463ED810382FE0535553010A0B99",
                                                                                "moduleCode": "0001",
                                                                                "moduleName": "Cash Management",
                                                                                "transactionType": "cashReturnOperation",
                                                                                "transactionName": "Penyerahan Uang"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "15",
                                                                            "modul": {
                                                                                "id": "5b34c1355b224a0a92986367f88aef80",
                                                                                "moduleCode": "0002",
                                                                                "moduleName": "Payment",
                                                                                "transactionType": "PaymentTransaction2",
                                                                                "transactionName": "Payment Transaction 2"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "parentRole": {
                                                "id": 0,
                                                "fxRole": "test",
                                                "roleName": "test",
                                                "description": "test",
                                                "status": "A ",
                                                "fxRoleId": 0
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E5290003",
                                            "role": {
                                                "id": 3,
                                                "fxRole": "Teller",
                                                "roleName": "Teller",
                                                "description": "Teller",
                                                "status": "A ",
                                                "fxRoleId": 3002
                                            },
                                            "parentRole": {
                                                "id": 2,
                                                "fxRole": "BranchManager",
                                                "roleName": "BH",
                                                "description": "Branch Head",
                                                "status": "A ",
                                                "fxRoleId": 1000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "134",
                                                        "typeKewenangan": "OTR",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "12345",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlTeller",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "11",
                                                                            "modul": {
                                                                                "id": "663C463ED810382FE0535553010A0B99",
                                                                                "moduleCode": "0001",
                                                                                "moduleName": "Cash Management",
                                                                                "transactionType": "cashReturnOperation",
                                                                                "transactionName": "Penyerahan Uang"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "15",
                                                                            "modul": {
                                                                                "id": "5b34c1355b224a0a92986367f88aef80",
                                                                                "moduleCode": "0002",
                                                                                "moduleName": "Payment",
                                                                                "transactionType": "PaymentTransaction2",
                                                                                "transactionName": "Payment Transaction 2"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E5290004",
                                            "role": {
                                                "id": 4,
                                                "fxRole": "JuruBayar",
                                                "roleName": "JB",
                                                "description": "Juru Bayar",
                                                "status": "A ",
                                                "fxRoleId": 6000
                                            },
                                            "parentRole": {
                                                "id": 6,
                                                "fxRole": "HT",
                                                "roleName": "HT",
                                                "description": "Head Teller",
                                                "status": "A ",
                                                "fxRoleId": 3000
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E52A0009",
                                            "role": {
                                                "id": 5,
                                                "fxRole": "SAMSPV",
                                                "roleName": "SAM SPV",
                                                "description": "SAM Supervisor",
                                                "status": "A ",
                                                "fxRoleId": 9000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "124",
                                                        "typeKewenangan": "OTR",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "1234",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlSAM",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "1",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90220987",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "ModulEdit",
                                                                                "transactionName": "Edit Modul"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "5",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90221872",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "ModulDelete",
                                                                                "transactionName": "Delete Modul"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "7",
                                                                            "modul": {
                                                                                "id": "8a8108c16219de8f016219de90220002",
                                                                                "moduleCode": "0004",
                                                                                "moduleName": "User Management",
                                                                                "transactionType": "LimitDelete",
                                                                                "transactionName": "Delete Limit"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "parentRole": {
                                                "id": 0,
                                                "fxRole": "test",
                                                "roleName": "test",
                                                "description": "test",
                                                "status": "A ",
                                                "fxRoleId": 0
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E5290001",
                                            "role": {
                                                "id": 6,
                                                "fxRole": "HT",
                                                "roleName": "HT",
                                                "description": "Head Teller",
                                                "status": "A ",
                                                "fxRoleId": 3000
                                            },
                                            "parentRole": {
                                                "id": 2,
                                                "fxRole": "BranchManager",
                                                "roleName": "BH",
                                                "description": "Branch Head",
                                                "status": "A ",
                                                "fxRoleId": 1000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "134",
                                                        "typeKewenangan": "OTR",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "12345",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlTeller",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "11",
                                                                            "modul": {
                                                                                "id": "663C463ED810382FE0535553010A0B99",
                                                                                "moduleCode": "0001",
                                                                                "moduleName": "Cash Management",
                                                                                "transactionType": "cashReturnOperation",
                                                                                "transactionName": "Penyerahan Uang"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "15",
                                                                            "modul": {
                                                                                "id": "5b34c1355b224a0a92986367f88aef80",
                                                                                "moduleCode": "0002",
                                                                                "moduleName": "Payment",
                                                                                "transactionType": "PaymentTransaction2",
                                                                                "transactionName": "Payment Transaction 2"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E52A0006",
                                            "role": {
                                                "id": 7,
                                                "fxRole": "CST",
                                                "roleName": "CST",
                                                "description": "CS and TELLER",
                                                "status": "A ",
                                                "fxRoleId": 8000
                                            },
                                            "parentRole": {
                                                "id": 16,
                                                "fxRole": "CSSupervisor",
                                                "roleName": "CS Supervisor",
                                                "description": "CS Supervisor",
                                                "status": "A ",
                                                "fxRoleId": 3001
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E5290005",
                                            "role": {
                                                "id": 7,
                                                "fxRole": "CST",
                                                "roleName": "CST",
                                                "description": "CS and TELLER",
                                                "status": "A ",
                                                "fxRoleId": 8000
                                            },
                                            "parentRole": {
                                                "id": 6,
                                                "fxRole": "HT",
                                                "roleName": "HT",
                                                "description": "Head Teller",
                                                "status": "A ",
                                                "fxRoleId": 3000
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E52A0007",
                                            "role": {
                                                "id": 8,
                                                "fxRole": "CS",
                                                "roleName": "Customer Service",
                                                "description": "Customer Service",
                                                "status": "A ",
                                                "fxRoleId": 2000
                                            },
                                            "parentRole": {
                                                "id": 2,
                                                "fxRole": "BranchManager",
                                                "roleName": "BH",
                                                "description": "Branch Head",
                                                "status": "A ",
                                                "fxRoleId": 1000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "134",
                                                        "typeKewenangan": "OTR",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "12345",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlTeller",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "11",
                                                                            "modul": {
                                                                                "id": "663C463ED810382FE0535553010A0B99",
                                                                                "moduleCode": "0001",
                                                                                "moduleName": "Cash Management",
                                                                                "transactionType": "cashReturnOperation",
                                                                                "transactionName": "Penyerahan Uang"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "15",
                                                                            "modul": {
                                                                                "id": "5b34c1355b224a0a92986367f88aef80",
                                                                                "moduleCode": "0002",
                                                                                "moduleName": "Payment",
                                                                                "transactionType": "PaymentTransaction2",
                                                                                "transactionName": "Payment Transaction 2"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E52A0008",
                                            "role": {
                                                "id": 15,
                                                "fxRole": "BackOffice",
                                                "roleName": "Back Office",
                                                "description": "Back Office",
                                                "status": "A ",
                                                "fxRoleId": 5000
                                            },
                                            "parentRole": {
                                                "id": 2,
                                                "fxRole": "BranchManager",
                                                "roleName": "BH",
                                                "description": "Branch Head",
                                                "status": "A ",
                                                "fxRoleId": 1000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "134",
                                                        "typeKewenangan": "OTR",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "12345",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlTeller",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "11",
                                                                            "modul": {
                                                                                "id": "663C463ED810382FE0535553010A0B99",
                                                                                "moduleCode": "0001",
                                                                                "moduleName": "Cash Management",
                                                                                "transactionType": "cashReturnOperation",
                                                                                "transactionName": "Penyerahan Uang"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "15",
                                                                            "modul": {
                                                                                "id": "5b34c1355b224a0a92986367f88aef80",
                                                                                "moduleCode": "0002",
                                                                                "moduleName": "Payment",
                                                                                "transactionType": "PaymentTransaction2",
                                                                                "transactionName": "Payment Transaction 2"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "id": "8A8108A8623D83E301623D83E5290002",
                                            "role": {
                                                "id": 16,
                                                "fxRole": "CSSupervisor",
                                                "roleName": "CS Supervisor",
                                                "description": "CS Supervisor",
                                                "status": "A ",
                                                "fxRoleId": 3001
                                            },
                                            "parentRole": {
                                                "id": 2,
                                                "fxRole": "BranchManager",
                                                "roleName": "BH",
                                                "description": "Branch Head",
                                                "status": "A ",
                                                "fxRoleId": 1000,
                                                "listKewenangan": [
                                                    {
                                                        "id": "134",
                                                        "typeKewenangan": "OTR",
                                                        "listModulKewenangan": [
                                                            {
                                                                "id": "12345",
                                                                "daftarModul": {
                                                                    "createdBy": "SYSTEM",
                                                                    "createdDate": 1521392400000,
                                                                    "modifiedBy": "SYSTEM",
                                                                    "modifiedDate": 1521392400000,
                                                                    "code": "MdlTeller",
                                                                    "listModuleGroup": [
                                                                        {
                                                                            "id": "11",
                                                                            "modul": {
                                                                                "id": "663C463ED810382FE0535553010A0B99",
                                                                                "moduleCode": "0001",
                                                                                "moduleName": "Cash Management",
                                                                                "transactionType": "cashReturnOperation",
                                                                                "transactionName": "Penyerahan Uang"
                                                                            }
                                                                        },
                                                                        {
                                                                            "id": "15",
                                                                            "modul": {
                                                                                "id": "5b34c1355b224a0a92986367f88aef80",
                                                                                "moduleCode": "0002",
                                                                                "moduleName": "Payment",
                                                                                "transactionType": "PaymentTransaction2",
                                                                                "transactionName": "Payment Transaction 2"
                                                                            }
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                "branchName": "KC CIREBON",
                                "status": "A ",
                                "departmentId": 60003
                            },
                            "userRoles": [
                                {
                                    "id": "8A810893618DD9AA01618DD9AB1C0080",
                                    "role": {
                                        "id": 3,
                                        "fxRole": "Teller",
                                        "roleName": "Teller",
                                        "description": "Teller",
                                        "status": "A ",
                                        "fxRoleId": 3002
                                    }
                                }
                            ],
                            "userName": "fes.uat161",
                            "fullName": "TELLER 1",
                            "loginType": "U",
                            "email": "IGedePutu.AryPradnyana@dev.corp.btpn.co.id",
                            "status": "A ",
                            "employeeId": 49004,
                            "userAccountId": 50003,
                            "fxUserId": 50003,
                            "lastLogin": 1522134051663
                        },
                        "branch": {
                            "code": "0015",
                            "hierarchy": {
                                "value": 1,
                                "label": "Global Hierarchy",
                                "description": "Global Hierarchy",
                                "listHierarchyRole": [
                                    {
                                        "id": "8A8108A8623D83E301623D83E52A000A",
                                        "role": {
                                            "id": 1,
                                            "fxRole": "SAM",
                                            "roleName": "SAM",
                                            "description": "SAM Officer",
                                            "status": "A ",
                                            "fxRoleId": 7000,
                                            "listKewenangan": [
                                                {
                                                    "id": "123",
                                                    "typeKewenangan": "OPT",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "123",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlSAM",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "1",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90220987",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "ModulEdit",
                                                                            "transactionName": "Edit Modul"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "5",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90221872",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "ModulDelete",
                                                                            "transactionName": "Delete Modul"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "7",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90220002",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "LimitDelete",
                                                                            "transactionName": "Delete Limit"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "parentRole": {
                                            "id": 5,
                                            "fxRole": "SAMSPV",
                                            "roleName": "SAM SPV",
                                            "description": "SAM Supervisor",
                                            "status": "A ",
                                            "fxRoleId": 9000,
                                            "listKewenangan": [
                                                {
                                                    "id": "124",
                                                    "typeKewenangan": "OTR",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "1234",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlSAM",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "1",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90220987",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "ModulEdit",
                                                                            "transactionName": "Edit Modul"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "5",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90221872",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "ModulDelete",
                                                                            "transactionName": "Delete Modul"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "7",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90220002",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "LimitDelete",
                                                                            "transactionName": "Delete Limit"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E5290000",
                                        "role": {
                                            "id": 2,
                                            "fxRole": "BranchManager",
                                            "roleName": "BH",
                                            "description": "Branch Head",
                                            "status": "A ",
                                            "fxRoleId": 1000,
                                            "listKewenangan": [
                                                {
                                                    "id": "134",
                                                    "typeKewenangan": "OTR",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "12345",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlTeller",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "11",
                                                                        "modul": {
                                                                            "id": "663C463ED810382FE0535553010A0B99",
                                                                            "moduleCode": "0001",
                                                                            "moduleName": "Cash Management",
                                                                            "transactionType": "cashReturnOperation",
                                                                            "transactionName": "Penyerahan Uang"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "15",
                                                                        "modul": {
                                                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                                                            "moduleCode": "0002",
                                                                            "moduleName": "Payment",
                                                                            "transactionType": "PaymentTransaction2",
                                                                            "transactionName": "Payment Transaction 2"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "parentRole": {
                                            "id": 0,
                                            "fxRole": "test",
                                            "roleName": "test",
                                            "description": "test",
                                            "status": "A ",
                                            "fxRoleId": 0
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E5290003",
                                        "role": {
                                            "id": 3,
                                            "fxRole": "Teller",
                                            "roleName": "Teller",
                                            "description": "Teller",
                                            "status": "A ",
                                            "fxRoleId": 3002
                                        },
                                        "parentRole": {
                                            "id": 2,
                                            "fxRole": "BranchManager",
                                            "roleName": "BH",
                                            "description": "Branch Head",
                                            "status": "A ",
                                            "fxRoleId": 1000,
                                            "listKewenangan": [
                                                {
                                                    "id": "134",
                                                    "typeKewenangan": "OTR",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "12345",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlTeller",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "11",
                                                                        "modul": {
                                                                            "id": "663C463ED810382FE0535553010A0B99",
                                                                            "moduleCode": "0001",
                                                                            "moduleName": "Cash Management",
                                                                            "transactionType": "cashReturnOperation",
                                                                            "transactionName": "Penyerahan Uang"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "15",
                                                                        "modul": {
                                                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                                                            "moduleCode": "0002",
                                                                            "moduleName": "Payment",
                                                                            "transactionType": "PaymentTransaction2",
                                                                            "transactionName": "Payment Transaction 2"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E5290004",
                                        "role": {
                                            "id": 4,
                                            "fxRole": "JuruBayar",
                                            "roleName": "JB",
                                            "description": "Juru Bayar",
                                            "status": "A ",
                                            "fxRoleId": 6000
                                        },
                                        "parentRole": {
                                            "id": 6,
                                            "fxRole": "HT",
                                            "roleName": "HT",
                                            "description": "Head Teller",
                                            "status": "A ",
                                            "fxRoleId": 3000
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E52A0009",
                                        "role": {
                                            "id": 5,
                                            "fxRole": "SAMSPV",
                                            "roleName": "SAM SPV",
                                            "description": "SAM Supervisor",
                                            "status": "A ",
                                            "fxRoleId": 9000,
                                            "listKewenangan": [
                                                {
                                                    "id": "124",
                                                    "typeKewenangan": "OTR",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "1234",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlSAM",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "1",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90220987",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "ModulEdit",
                                                                            "transactionName": "Edit Modul"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "5",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90221872",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "ModulDelete",
                                                                            "transactionName": "Delete Modul"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "7",
                                                                        "modul": {
                                                                            "id": "8a8108c16219de8f016219de90220002",
                                                                            "moduleCode": "0004",
                                                                            "moduleName": "User Management",
                                                                            "transactionType": "LimitDelete",
                                                                            "transactionName": "Delete Limit"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        "parentRole": {
                                            "id": 0,
                                            "fxRole": "test",
                                            "roleName": "test",
                                            "description": "test",
                                            "status": "A ",
                                            "fxRoleId": 0
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E5290001",
                                        "role": {
                                            "id": 6,
                                            "fxRole": "HT",
                                            "roleName": "HT",
                                            "description": "Head Teller",
                                            "status": "A ",
                                            "fxRoleId": 3000
                                        },
                                        "parentRole": {
                                            "id": 2,
                                            "fxRole": "BranchManager",
                                            "roleName": "BH",
                                            "description": "Branch Head",
                                            "status": "A ",
                                            "fxRoleId": 1000,
                                            "listKewenangan": [
                                                {
                                                    "id": "134",
                                                    "typeKewenangan": "OTR",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "12345",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlTeller",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "11",
                                                                        "modul": {
                                                                            "id": "663C463ED810382FE0535553010A0B99",
                                                                            "moduleCode": "0001",
                                                                            "moduleName": "Cash Management",
                                                                            "transactionType": "cashReturnOperation",
                                                                            "transactionName": "Penyerahan Uang"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "15",
                                                                        "modul": {
                                                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                                                            "moduleCode": "0002",
                                                                            "moduleName": "Payment",
                                                                            "transactionType": "PaymentTransaction2",
                                                                            "transactionName": "Payment Transaction 2"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E52A0006",
                                        "role": {
                                            "id": 7,
                                            "fxRole": "CST",
                                            "roleName": "CST",
                                            "description": "CS and TELLER",
                                            "status": "A ",
                                            "fxRoleId": 8000
                                        },
                                        "parentRole": {
                                            "id": 16,
                                            "fxRole": "CSSupervisor",
                                            "roleName": "CS Supervisor",
                                            "description": "CS Supervisor",
                                            "status": "A ",
                                            "fxRoleId": 3001
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E5290005",
                                        "role": {
                                            "id": 7,
                                            "fxRole": "CST",
                                            "roleName": "CST",
                                            "description": "CS and TELLER",
                                            "status": "A ",
                                            "fxRoleId": 8000
                                        },
                                        "parentRole": {
                                            "id": 6,
                                            "fxRole": "HT",
                                            "roleName": "HT",
                                            "description": "Head Teller",
                                            "status": "A ",
                                            "fxRoleId": 3000
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E52A0007",
                                        "role": {
                                            "id": 8,
                                            "fxRole": "CS",
                                            "roleName": "Customer Service",
                                            "description": "Customer Service",
                                            "status": "A ",
                                            "fxRoleId": 2000
                                        },
                                        "parentRole": {
                                            "id": 2,
                                            "fxRole": "BranchManager",
                                            "roleName": "BH",
                                            "description": "Branch Head",
                                            "status": "A ",
                                            "fxRoleId": 1000,
                                            "listKewenangan": [
                                                {
                                                    "id": "134",
                                                    "typeKewenangan": "OTR",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "12345",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlTeller",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "11",
                                                                        "modul": {
                                                                            "id": "663C463ED810382FE0535553010A0B99",
                                                                            "moduleCode": "0001",
                                                                            "moduleName": "Cash Management",
                                                                            "transactionType": "cashReturnOperation",
                                                                            "transactionName": "Penyerahan Uang"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "15",
                                                                        "modul": {
                                                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                                                            "moduleCode": "0002",
                                                                            "moduleName": "Payment",
                                                                            "transactionType": "PaymentTransaction2",
                                                                            "transactionName": "Payment Transaction 2"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E52A0008",
                                        "role": {
                                            "id": 15,
                                            "fxRole": "BackOffice",
                                            "roleName": "Back Office",
                                            "description": "Back Office",
                                            "status": "A ",
                                            "fxRoleId": 5000
                                        },
                                        "parentRole": {
                                            "id": 2,
                                            "fxRole": "BranchManager",
                                            "roleName": "BH",
                                            "description": "Branch Head",
                                            "status": "A ",
                                            "fxRoleId": 1000,
                                            "listKewenangan": [
                                                {
                                                    "id": "134",
                                                    "typeKewenangan": "OTR",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "12345",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlTeller",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "11",
                                                                        "modul": {
                                                                            "id": "663C463ED810382FE0535553010A0B99",
                                                                            "moduleCode": "0001",
                                                                            "moduleName": "Cash Management",
                                                                            "transactionType": "cashReturnOperation",
                                                                            "transactionName": "Penyerahan Uang"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "15",
                                                                        "modul": {
                                                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                                                            "moduleCode": "0002",
                                                                            "moduleName": "Payment",
                                                                            "transactionType": "PaymentTransaction2",
                                                                            "transactionName": "Payment Transaction 2"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "id": "8A8108A8623D83E301623D83E5290002",
                                        "role": {
                                            "id": 16,
                                            "fxRole": "CSSupervisor",
                                            "roleName": "CS Supervisor",
                                            "description": "CS Supervisor",
                                            "status": "A ",
                                            "fxRoleId": 3001
                                        },
                                        "parentRole": {
                                            "id": 2,
                                            "fxRole": "BranchManager",
                                            "roleName": "BH",
                                            "description": "Branch Head",
                                            "status": "A ",
                                            "fxRoleId": 1000,
                                            "listKewenangan": [
                                                {
                                                    "id": "134",
                                                    "typeKewenangan": "OTR",
                                                    "listModulKewenangan": [
                                                        {
                                                            "id": "12345",
                                                            "daftarModul": {
                                                                "createdBy": "SYSTEM",
                                                                "createdDate": 1521392400000,
                                                                "modifiedBy": "SYSTEM",
                                                                "modifiedDate": 1521392400000,
                                                                "code": "MdlTeller",
                                                                "listModuleGroup": [
                                                                    {
                                                                        "id": "11",
                                                                        "modul": {
                                                                            "id": "663C463ED810382FE0535553010A0B99",
                                                                            "moduleCode": "0001",
                                                                            "moduleName": "Cash Management",
                                                                            "transactionType": "cashReturnOperation",
                                                                            "transactionName": "Penyerahan Uang"
                                                                        }
                                                                    },
                                                                    {
                                                                        "id": "15",
                                                                        "modul": {
                                                                            "id": "5b34c1355b224a0a92986367f88aef80",
                                                                            "moduleCode": "0002",
                                                                            "moduleName": "Payment",
                                                                            "transactionType": "PaymentTransaction2",
                                                                            "transactionName": "Payment Transaction 2"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "branchName": "KC CIREBON",
                            "status": "A ",
                            "departmentId": 60003
                        },
                        "glNumber": "0015879111360",
                        "status": "0",
                        "type": "2",
                        "currency": {
                            "currIsoCode": "360",
                            "symbol": "IDR",
                            "name": "Rupiah",
                            "internationalName": "Indonesian Rupiah"
                        },
                        "lastClosed": 1522060599519,
                        "balance": 100000
                    }
                ],
                "page": 0,
                "rowPerPage": 20,
                "totalData": 1,
                "startRow": 0,
                "totalPage": 1
            }
        })
    });

    app.get('/branch/cashboxinfo/:cif', function (req, res) {
        res.json({
            "responseStatus": {
                "responseCode": "00",
                "responseDesc": "SUCCESS"
            },

            "requestId":
                "45494b3fa03c4e809edecd04314e9021",
            "paging": {
                "data": {
                    "status": 0,
                    "currencySymbol": "IDR",
                    "glNumber": "GSFD6645",
                    "balance": 12340000
                }
            }
        })
    });

    app.post('/branch/cash/registerDenom', function (req, res) {
        res.json({
            "responseStatus": {
                "responseCode": "00",
                "responseDesc": "out of stock"
            },
            "requestId": "45494b3fa04c4e809edecd04314e9021",
            "data": {
                "stockNotAvailable": ""
            }
        })
    })

    app.post('/branch/cash/changeStatus', function (req, res) {
        res.json({
            "responseStatus": {
                "responseCode": "00",
                "responseDesc": "out of stock"
            },
            "requestId": "45494b3fa04c4e809edecd04314e9021",
            "data": {
                "stockNotAvailable": ""
            }
        })
    })


    app.get('/denom/applicableDenom/:currISO', function (req, res) {
        res.json({
            "responseStatus": {
                "responseCode": "00",
                "responseDesc": "SUCCESS"
            },
            "requestId": "d096797cbce44d30a14f95f7e264db4b",
            "data": [
                {
                    "id": "a2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "100000",
                    "type": "1",
                    "typeDesc": "Bank Note",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "b2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "50000",
                    "type": "1",
                    "typeDesc": "Bank Note",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "c2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "20000",
                    "type": "1",
                    "typeDesc": "Bank Note",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "d2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "10000",
                    "type": "1",
                    "typeDesc": "Bank Note",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "e2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "5000",
                    "type": "1",
                    "typeDesc": "Bank Note",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "f2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "2000",
                    "type": "1",
                    "typeDesc": "Bank Note",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "g2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "1000",
                    "type": "1",
                    "typeDesc": "Bank Note",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "h2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "1000",
                    "type": "2",
                    "typeDesc": "Coin",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "i2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "500",
                    "type": "2",
                    "typeDesc": "Coin",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "j2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "200",
                    "type": "2",
                    "typeDesc": "Coin",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "k2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "100",
                    "type": "2",
                    "typeDesc": "Coin",
                    "status": "1",
                    "statusDesc": "Active"
                },
                {
                    "id": "l2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "currIsoCode": "360",
                    "symbol": "IDR",
                    "name": "Rupiah",
                    "internationalName": "Indonesian Rupiah",
                    "value": "50",
                    "type": "2",
                    "typeDesc": "Coin",
                    "status": "1",
                    "statusDesc": "Active"
                }
            ]
        })
    })

    app.get('/branchCash/yesterdayCashReturn/:cashboxId', function (req, res) {
        //var cif = req.params.cif;
        req.session.user = 'userName';
        //req.session.user && cif
        if (req.session.user) {
            res.json({
                "responseStatus": {
                    "responseCode": "00",
                    "responseDesc": "SUCCESS"
                },
                "requestId": "3c5ca53a318d4cdabe5983a92b415537",
                "data": {
                    "cashOperationId": "4028a88962197d4201621ee00da7005b",
                    "sourceCashboxId": "4028a87e61f44c110161f473d55f0043",
                    "destinationCashboxId": "41",
                    "cashOperationType": "2",
                    "amount": 3000000,
                    "remark": "Cash Request Approve",
                    "operatorId": "fes.uat161",
                    "supervisorId": "fes.uat143",
                    "applicationId": "285",
                    "status": "1",
                    "useYesterdayFlag": false,
                    "referenceNo": "CRT130318000066",
                    "cbBalancePreApproval": 29431980,
                    "cashOperationDetails": [
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "a2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 30
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "b2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "c2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "d2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "e2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "f2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "g2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "h2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "i2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "j2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "k2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        },
                        {
                            "cashOperationId": "4028a88962197d4201621ee00da7005b",
                            "denominationId": "l2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                            "quantity": 0
                        }
                    ]
                }
            })
        } else {
            res.json({});
        }
    });

    app.get('/denom/:cashboxId/denomBalance/', function (req, res) {
        res.json({
            "responseStatus": {
                "responseCode": "00",
                "responseDesc": "SUCCESS"
            },
            "requestId": "cafdd7add71a42488d8dbb79cef9f2ae",
            "data": [
                {
                    "cashBoxId": "29",
                    "denominationId": "a2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 100153,
                    "reserved": 20126,
                    "available": 80027
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "b2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 24301,
                    "reserved": 0,
                    "available": 24301
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "c2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 45101,
                    "reserved": 0,
                    "available": 45101
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "d2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 23003,
                    "reserved": 0,
                    "available": 23003
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "e2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 25001,
                    "reserved": 0,
                    "available": 25001
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "f2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 17004,
                    "reserved": 0,
                    "available": 17004
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "g2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 10001,
                    "reserved": 0,
                    "available": 10001
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "h2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 10000,
                    "reserved": 0,
                    "available": 10000
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "i2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 10001,
                    "reserved": 0,
                    "available": 10001
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "j2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 10004,
                    "reserved": 0,
                    "available": 10004
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "k2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 10001,
                    "reserved": 0,
                    "available": 10001
                },
                {
                    "cashBoxId": "29",
                    "denominationId": "l2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                    "quantity": 10000,
                    "reserved": 0,
                    "available": 10000
                }
            ]
        })
    })

    app.post('/branchCash/cashOperation', function (req, res) {
        res.json({
          "responseStatus": {
            "responseCode": "00",
            "responseDesc": "SUCCESS"
          },
          "requestId": "2176473a97dc4df497550a981ca2b4df",
          "data": {
            "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
            "sourceCashboxId": "40289cf961f5a3940161f5aa94ee0000",
            "destinationCashboxId": "4028a87e61f44c110161f52889260094",
            "targetCashboxId": "4028a87e61f44c110161f52889260094",
            "targetCashboxUserName": "fes.uat01",
            "cashOperationType": "2",
            "amount": 50000,
            "remark": "CR 1",
            "operatorId": "fes.uat06",
            "applicationId": "1828",
            "applicationNo": "CRT-00000232",
            "status": "0",
            "useYesterdayFlag": false,
            "operatorName": "0012 CST 1",
            "branchId": "0012",
            "branchName": "KC BOGOR",
            "operatorRoleName": "CST",
            "cashOperationDetails": [
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "a2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "b2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 1
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "c2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "d2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "e2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "f2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "g2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "h2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "i2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "j2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "k2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              },
              {
                "cashOperationId": "40288fd462d3276a0162d37ed9fa01e0",
                "denominationId": "l2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                "quantity": 0
              }
            ]
          }
        })
    })

    app.post('/branchCash/cashApproval', function (req, res) {
        res.json({
            "responseStatus": {
                "responseCode": "00",
                "responseDesc": "SUCCESS"
            },
            "requestId": "5a7334ccc5004af492831f804926b01c",
            "data": {
                "referenceNo": "1324552234",
                "cashOperationId": "8a8108816198914301619891db4a0001",
                "sourceCashboxId": "999",
                "destinationCashboxId": "999",
                "cashOperationType": "2",
                "amount": 170000,
                "remark": "Remark",
                "operatorId": "fes.pts11",
                "supervisorId": "SupervisorId",
                "applicationNo": "wamy",
                "tasklistId": "TasklistId",
                "status": "2",
                "useYesterdayFlag": false,
                "rejectionNote": "test reject",
                "overlimitLog": {
                  "overlimitLogId": "8a80cb8162ae77420162aea3151c0000",
                  "limitType": "0",
                  "branchId": "0012",
                  "limitValue": 500000,
                  "actualValue": 4135401250,
                  "status": "0"
                },
                "cashOperationDetails": [
                    {
                        "cashOperationId": "8a8108816198914301619891db4a0001",
                        "denominationId": "a2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                        "quantity": 1
                    },
                    {
                        "cashOperationId": "8a8108816198914301619891db4a0001",
                        "denominationId": "b2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                        "quantity": 1
                    },
                    {
                        "cashOperationId": "8a8108816198914301619891db4a0001",
                        "denominationId": "c2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                        "quantity": 1
                    }
                ]
            }
        })
    })

    app.get('/pettycash/branchCash/applicationId/:applicationId', function (req, res) {
        res.json({
            "responseStatus": {
                "responseCode": "00",
                "responseDesc": "SUCCESS"
            },
            "requestId": "5a7334ccc5004af492831f804926b01c",
            "data": {
                "referenceNo": "1324552234",
                "cashOperationId": "8a8108816198914301619891db4a0001",
                "sourceCashboxId": "297e72c061c1e08f0161c2047ca20009",
                "destinationCashboxId": "297e72c061c1e08f0161c2047ca20009",
                "cashOperationType": "2",
                "amount": 170000,
                "remark": "Remark",
                "operatorId": "fes.pts01",
                "supervisorId": "SupervisorId",
                "applicationId": "wamy",
                "tasklistId": "TasklistId",
                "status": "3",
                "useYesterdayFlag": false,
                "rejectionNote": "test reject",
                "cashOperationDetails": [
                    {
                        "cashOperationId": "8a8108816198914301619891db4a0001",
                        "denominationId": "a2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                        "quantity": 1
                    },
                    {
                        "cashOperationId": "8a8108816198914301619891db4a0001",
                        "denominationId": "b2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                        "quantity": 1
                    },
                    {
                        "cashOperationId": "8a8108816198914301619891db4a0001",
                        "denominationId": "c2f3f08e-c936-4bbe-aebc-1333d8619a7e",
                        "quantity": 1
                    }
                ]
            }
        })
    })
    app.post('/branchCash/summary/total', function(req, res){
      res.json({
        "responseStatus": {
          "responseCode": "00",
          "responseDesc": "SUCCESS"
        },
        "requestId": "1176e29cd324416bb7d8b68adbe37488",
        "data": [
          {
            "quantity": 0,
            "debit": 0,
            "credit": 0
          },
          {
            "transactionType": "2",
            "quantity": 8,
            "debit": 174600000000,
            "credit": 0
          },
          {
            "transactionType": "3",
            "quantity": 12,
            "debit": 0,
            "credit": 174600000000
          },
          {
            "quantity": 0,
            "debit": 0,
            "credit": 0
          }
        ]
      })
    });

    app.post('/branchCash/transaction/summary', function(req, res){
      res.json({
        "responseStatus": {
          "responseCode": "00",
          "responseDesc": "SUCCESS"
        },
        "requestId": "f61fd864657e4c848b42abf8def4ac95",
        "data": {
          "transactionSummaryId": "8a80cb8162b7cb8e0162b7cf927f0000",
          "glNumber": "0012879101360",
          "transactionDate": 1523502256513,
          "operatorId": "fes.uat01",
          "operatorName": "0012 - HEAD TELLER 1",
          "role": "HT",
          "denom": [
            {
              "transactionSummaryDenomId": "8a80cb8162b7cb8e0162b7cf93330001",
              "denominationId": "a2f3f08e-c936-4bbe-aebc-1333d8619a7e",
              "quantity": 0
            }
          ],
          "detail": [
            {
              "quantity": 0,
              "debit": 0,
              "credit": 0
            },
            {
              "quantity": 236,
              "debit": 33463950732000,
              "credit": 0
            },
            {
              "quantity": 280,
              "debit": 0,
              "credit": 36413872883000
            },
            {
              "quantity": 0,
              "debit": 0,
              "credit": 0
            }
          ]
        }
      })
    });
    app.post('/branchCash/transaction/summary/backdate', function(req, res){
      res.json({
        "responseStatus": {
          "responseCode": "00",
          "responseDesc": "SUCCESS"
        },
        "requestId": "f61fd864657e4c848b42abf8def4ac95",
        "data": {
          "transactionSummaryId": "8a80cb8162b7cb8e0162b7cf927f0000",
          "glNumber": "0012879101360",
          "transactionDate": 1523502256513,
          "operatorId": "fes.uat01",
          "operatorName": "0012 - HEAD TELLER 1",
          "role": "HT",
          "denom": [
            {
              "transactionSummaryDenomId": "8a80cb8162b7cb8e0162b7cf93330001",
              "denominationId": "a2f3f08e-c936-4bbe-aebc-1333d8619a7e",
              "quantity": 1
            }
          ],
          "detail": [
            {
              "quantity": 0,
              "debit": 0,
              "credit": 0
            },
            {
              "quantity": 236,
              "debit": 33463950732000,
              "credit": 0
            },
            {
              "quantity": 280,
              "debit": 0,
              "credit": 36413872883000
            },
            {
              "quantity": 0,
              "debit": 0,
              "credit": 0
            }
          ]
        }
      })
    });
}