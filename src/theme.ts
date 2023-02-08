import { Theme, ThemeUIStyleObject } from "theme-ui"

const modalOverlay: ThemeUIStyleObject = {
  position: "fixed",

  zIndex: 1,
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh"
};


export const theme: Theme = {
  breakpoints: ["700px", "800px", "1100px", "1200px", "1300px"],

  colors: {
    backgroundColor: "#141413",
    color: "#8B95A6",
    text: "#8B95A6",
  },

  

  layout: {

    components: {

      modalOverlay: {
        ...modalOverlay,
  
        bg: "rgba(0, 0, 0, 0.6)",
  
        display: "flex",
        position: "fixed"
      },
  
      modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "fit-content"
      },
  
      informationmodal: {
        padding: 3,
        width: ["100%", "40em"],
  
        information: {
          width: ["100%", "50em"],
        }
      },
  
      infoOverlay: {
        ...modalOverlay,
  
        display: ["block", "none"],
  
        bg: "rgba(255, 255, 255, 0.3)",
        zIndex: 3
      },
  
      infoMessage: {
        display: "flex",
        justifyContent: "center",
        m: 3,
        alignItems: "center",
        minWidth: "128px"
      },

      rarity: {
        grid: {
          borderColor: "rgba(139, 146, 255, 0.1)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "24px",
          backgroundColor: "rgba(52, 61, 77, 0.2)",
          minHeight: "fit-content",
          padding: "1rem",
          backgroundSize: "cover",
          width: ["300px", "500px", "650px", "900px", "1000px"],

          piece: {

            borderColor: "rgba(139, 146, 255, 0.1)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "24px",
            backgroundColor: "rgba(52, 61, 77, 0.2)",

          }

        },
        index: {
          display: "flex",
          flexDirection: "column",
          flex: "1",
          width: ["fit-content"],
          borderColor: "rgba(139, 146, 255, 0.1)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "24px",
          backgroundColor: "#060B1F",
          minHeight: "fit-content",
          padding: "2rem",
          backgroundSize: "cover"
        },
      },

      selectors: {
        raceSelector: {
          left: {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            maxWidth: ["100%", "100px", "100px", "100px"],
            minWidth: "fit-content",
            justifyContent: "flex-end"
          },

          right: {
            mt: ["3rem", "0"],
            display: "flex",
            flexDirection: "column",
            flex: "1",
            maxWidth: ["100%", "800px", "900px", "1000px"],
            borderColor: "rgba(139, 146, 255, 0.2)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "24px",
            backgroundSize: "cover",
            minHeight: "600px",
            ml: "2rem",
            padding: ["2rem"]
          }
        },

        raceCarousel: {
          arrow: {
            display: "flex",
            justifyContent: "flex-start",
            minWidth: "fit-content",
            alignContent: "center",
            my: "auto",
            mx: "0.5rem"
          },

          card: {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            width: "100%",
            borderColor: "rgba(139, 146, 255, 0.1)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "24px",
            backgroundColor: "rgba(52, 61, 77, 0.2)",
            backgroundSize: "cover",
            height: ["fit-content", "900px", "800px", "600px"],
            padding: "2rem",

            title: {
              mb: "1rem", color: "#dad0c5", width: "100%"
            },
            content: {
              mb: "2rem",
              width: "90%",
              lineHeight: "24px",
              color: "#a6adb8"
            },
            image: {
              borderColor: "rgba(139, 146, 255, 0.1)",
              borderWidth: "1px",
              borderStyle: "solid", width: "100%", height: "auto", mt: '2rem', borderRadius: "24px"
            }
          },
        },

        traitSelector: {
          left: {
            mt: ["3rem", "3rem", "3rem", "0"],
            display: "flex",
            flexDirection: "column",
            flex: "1",
            width: ["100%", "800px", "900px", "1000px"],
            borderColor: "rgba(139, 146, 255, 0.1)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "24px",
            backgroundColor: "rgba(52, 61, 77, 0.2)",
            marginRight: ["0rem", "0rem", "0rem", "0rem", "2rem"],
            height: "500px",
            padding: "2rem",
            backgroundSize: "cover"
          },

          right: {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            maxWidth: ["100%", "100px", "100px", "100px"],
            minWidth: "fit-content",
            justifyContent: "flex-start"
          }
        },

        traitCarousel: {
          card: {
            display: "flex",
            flexDirection: "column",
            flex: "1",
            width: "100%",
            borderColor: "rgba(139, 146, 255, 0.1)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "24px",
            backgroundColor: "rgba(52, 61, 77, 0.2)",
            height: "fit-content",
            padding: "2rem",

            title: {
              mb: ["0.5rem", "0.5rem", "0.5rem", "1rem"],
              color: "#49CFDE",
              fontFamily: "Questrial",
              fontWeight: 800,
              letterSpacing: "1px"
            },
            content: {
              mb: "2rem",
              width: "90%",
              lineHeight: "24px",
              color: "#a6adb8"
            },
            image: {
              borderColor: "rgba(139, 146, 255, 0.1)",
              borderWidth: "1px",
              borderStyle: "solid", width: "100%", height: "auto", mt: '2rem', borderRadius: "24px"
            }
          },

          arrow: {
            display: "flex",
            justifyContent: "flex-start",
            minWidth: "fit-content",
            alignContent: "center",
            my: "auto",
            mx: "0.5rem"
          }
        }
      },

      preloader: {
        background: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px"
      },

      loading: {
        text: {
          fontSize: "42px", color: "#fff", fontFamily: "Questrial, sans-serif", fontWeight: 600, mx: "auto"
        }
      },

      videoBackground: {

        container: {

          display: ["none", "none", "none", "flex"],
          width: "100vw",
          mb: "3rem"

        }
      },

      introContent: {

        width: "100%",
        display: "flex",
        flexDirection: "column",

        title: {
          mb: "1rem",
          fontSize: "28px",
          letterSpacing: "2px",
          color: "#49CFDE",
          fontFamily: "Questrial",
          fontWeight: 800,
          mx: "auto"
        },

        trailerCard: {
          width: "100%",
          borderColor: "rgba(139, 146, 255, 0.1)",
          borderWidth: "1px",
          borderStyle: "solid",
          backgroundColor: "rgba(52, 61, 77, 0.2)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          height: "fit-content",
        },

        content: {
          color: "#fff",
          fontSize: "18px",
          lineHeight: "24px",
          textJustify: "auto",
          textAlign: "justify",
          fontFamily: "Poppins-ExtraLight"
        }
      }
    },


    animation: {
      lilSquare: {
        zIndex: 2,
        backgroundColor: "#fff",
        opacity: "0.2"
      },

      lilCircle: {
        zIndex: 2,
        backgroundColor: "#fff",
        opacity: "0.2",
        borderRadius: "50%",
      },

      textObject: {
        letterSpacing: "2px", zIndex: 2, fontSize: "9px", fontFamily: "Questrial", color: "#fff",
      },

      linksObject: {
        visibility: ["hidden", "hidden", "hidden", "visible"],
        zIndex: 3,
        display: "flex",
        flexDirection: "row",

        linkBox: {
          display: "flex",
          flexDirection: "row",
          fontSize: "14px",
          letterSpacing: "2px",
          fontFamily: 'poppins',
          color: "#fff",
          textDecoration: "none",
          "&:hover": { textDecoration: "none", color: "#49CFDE" },
        }
      },

      mintButton: {
        zIndex: 3,
        padding: "0.5rem 1rem 0.5rem 1rem",
        backgroundColor: "#49CFDE",
        color: "black",
        borderRadius: "12px",
        minWidth: "fit-content",

        transition: "0.4s",
        cursor: "pointer",
        height: "fit-content",
        "&:hover": {
          background: "transparent",
          color: "white",
          border: "solid 0.2px white",
        },
      }
    },

    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    section: {
      width: ["100%", "600px", "800px", "900px", "1100px"],
      mb: ["3rem", "3rem", "3rem", "5rem"],
      paddingX: ["2.5rem", "2.5rem", "0rem", "0rem", "0rem"],

      faqs: {
        title: {
          fontSize: "42px",
          color: "#fff",
          fontFamily: "Questrial, sans-serif",
          fontWeight: 600,
          mx: "auto",
          mb: "3rem"
        },

        container: {
          mb: "3rem",
          flexDirection: ["column", "column", "row"],
          display: "flex",
          justifyContent: "space-between"
        },

        paginationContainer: {
          mx: "auto",
          display: "flex",
          flexDirection: "row",

          pageButton: {
            cursor: "pointer",
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            border: "1px solid white"
          }
        }
      },


      brought: {
        left: {
          display: "flex",
          flexDirection: "column",
          flex: "1",
          width: ["100%", "100%", "100%", "100%", "50%"],
        },

        right: {
          display: "flex",
          flexDirection: "column",
          flex: "1",
          width: ["100%", "100%", "100%", "100%", "40%"],
          padding: ["0rem", "0rem", "2rem", "2rem", "2rem"],

          broughtToYouByText: {
            fontSize: "22px",
            mb: "1rem",
            color: "#49CFDE"
          },

          title: {
            fontSize: ["48px", "56px", "64px", "74px"],
            mb: "1rem",
            color: "#49CFDE",
            fontWeight: 600,
            letterSpacing: "2px"
          },

          content: {
            mb: "3rem",
            width: ["100%", "100%", "100%", "100%", "500px"],
            color: "white",
            lineHeight: 1.6,
            fontSize: "18px"
          },

          button: {
            padding: "1rem 2rem 1rem 2rem",
            backgroundColor: "#49CFDE",
            color: "black",
            borderRadius: "20px",
            width: "fit-content",

            transition: "0.4s",
            cursor: "pointer",

            "&:hover": {
              background: "transparent",
              color: "white",
              border: "solid 0.2px white",
            },
          }
        }
      },

      intro: {
        left: {
          display: "flex",
          flexDirection: "column",
          flex: "1",
          maxWidth: ["100%", "100%", "100%", "400px", "500px"],
          mb: "2rem",

          buttonsContainer: {
            display: "flex",
            flex: "1",
            marginBottom: "3rem",
            flexDirection: ["column", "column", "row", "row", "row"],
            minHeight: "fit-content",


            button: {
              padding: "0.5rem 1rem 0.5rem 1rem",
              borderRadius: "14px",
              cursor: "pointer",
              minWidth: "fit-content",
              height: "fit-content",
            }
          }
        },

        right: {
          // IN COMPONENT
        }
      },

      team: {
        title: {
          flexDirection: "row",
          display: "flex",
          fontSize: "48px",
          color: "#fff",
          fontFamily: "Questrial, sans-serif",
          fontWeight: 600,
          mx: "auto",
          marginBottom: "5rem",
        },

        teamMemberContainer: {
          width: "100%",
          display: "flex",
          flexDirection: ["column", "column", "row"],

          teamMember: {
            opacity: 0,
            width: ["100%", "10%"],
            flexDirection: "column",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            zIndex: 1,
            textAlign: "center",

            imageBox: {
              transition: "0.2s",
              borderRadius: "50%",
              backgroundSize: "cover",
              alignContent: "center",
              alignItems: "center",
              width: "140px",
              height: "140px",
              border: "2px solid white",
            },

            text: {
              mt: "1rem",
              color: "white"
            }
          }
        }
      },

      roadmap: {
        title: {
          flexDirection: "row",
          display: "flex",
          mb: "3rem",
          alignContent: "center",
          justifyContent: "center",
          fontSize: "48px",
          color: "#fff",
          fontFamily: "Questrial, sans-serif",
          fontWeight: 600
        },

        piecesContainer: {
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",

          roadmapPieceCol: {
            width: ["100%", "100%", "30%", "30%", "30%"],
            borderRadius: "10px",
            display: "flex",
            flexWrap: "wrap",
            letterSpacing: "2px",
            flexDirection: "column",

            title: {
              fontSize: "20px",
              color: "#49CFDE",
              mx: "auto",
              fontFamily: "Poppins",
              fontWeight: 800
            },

            content: {
              fontSize: "18px",
              mt: "1rem",
              mx: "auto",
              width: "100%",
              lineHeight: "24px",
              color: "white",
              fontFamily: "Poppins-ExtraLight",
              textJustify: "auto",
              textAlign: "center",
              height: "auto"
            },

            image: {
              display: "flex",
              justifyContent: "flex-end",
              mx: "auto",
              width: "100%",
              borderRadius: "24px",
              mt: "2rem",
              borderColor: "rgba(139, 146, 255, 0.1)",
              borderWidth: "1px",
              borderStyle: "solid"
            },

            special: {
              fontSize: "12px",
              my: "2rem",
              mx: "auto",
              width: "100%",
              lineHeight: "24px",
              color: "white",
              fontFamily: "Poppins-ExtraLight",
              textJustify: "auto",
              height: "auto"
            }
          }
        },

        videoContainer: {
          mt: ["3rem", "5rem"],
          flexDirection: "column",
          flex: "1",
          minWidth: "100%",
          borderColor: "rgba(139, 146, 255, 0.1)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderRadius: "24px",
          backgroundColor: "rgba(52, 61, 77, 0.2)",
          height: "fit-content",
          mb: "3rem",
        }
      },

      mint: {
        title: {
          fontSize: "48px",
          mb: "1rem",
          color: "#49CFDE",
          fontWeight: 500,
          letterSpacing: "normal",
          fontFamily: "Questrial"
        },

        content: {
          mb: ["1rem", "2rem", "3rem", "3rem"],
          maxWidth: "500px",
          color: "#fff",
          fontFamily: "Poppins"
        }
      },

      footer: {
        flexDirection: "column",
        my: "3rem",
        position: "relative",

        iconsContainer: {
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          mb: "2rem",

          link: {
            backgroundColor: "#212529",
            padding: "0.6rem",
            borderRadius: "50%",
            transition: "0.4s",
            cursor: "pointer",
          }
        },

        labelContainer: {
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
        }
      }
    },

    nav: {
      container: {
        width: "100%",
        height: "150px",
        zIndex: 999,
        position: "fixed",
        display: "flex",
      }
    },

    avatar: {
      image: {
        borderRadius: "24px",
        border: "5px solid #d8cbbc"
      }
    }

  }
}
