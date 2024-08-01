import { StyleSheet, Dimensions } from "react-native";
import {
  black,
  gray,
  green,
  iconColor,
  lightBlack,
  lightWhite,
  mainColor,
  offline,
  orange,
  white,
} from "./colors";
import { font1216, font131517, font1820, font911 } from "./fontSize";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  gradiendMain: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoCenterImagesSplash: {
    width: "40%",
    height: width * 0.4,
  },
  // login Page start
  imagesToplogins: {
    width: height * 0.25,
    height: height * 0.25,
  },
  loginComplateLightWhite: {
    flex: 1,
    width: "100%",
    backgroundColor: lightWhite,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    gap: 15,
  },
  loginWellcomeText: {
    color: white,
    fontSize: font1820,
    fontWeight: "700",
    letterSpacing: 1,
  },
  loginHeaderDetailText: {
    color: white,
    fontSize: font131517,
    fontWeight: "400",
  },
  loginInputMain: {
    width: "100%",
    height: width < 400 ? 50 : width < 600 ? 55 : 60,
    borderWidth: 1,
    borderColor: lightWhite,
    backgroundColor: lightWhite,
    borderRadius: 5,
    flexDirection: "row",
  },
  iconInputLeft: {
    width: width < 400 ? 50 : width < 600 ? 55 : 60,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputLoginFileIn: {
    flex: 1,
    height: "100%",
    color: white,
    fontSize: font131517,
  },
  btwSpaceLogins: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  circleGreensCheck: {
    width: width < 400 ? 30 : width < 600 ? 35 : 40,
    height: width < 400 ? 30 : width < 600 ? 35 : 40,
    backgroundColor: green,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textWhiteLoginPage: {
    color: white,
    fontSize: font1216,
  },
  mainButton: {
    width: "100%",
    height: width < 400 ? 50 : width < 600 ? 55 : 60,
    backgroundColor: mainColor,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  mainButtonText: {
    color: black,
    fontSize: font1820,
    fontWeight: "500",
  },
  bottomLoginPageCenter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  minimalBottomText: {
    fontSize: font1216,
    color: white,
  },
  loginBottomTopHeADER: {
    color: white,
    marginBottom: 30,
    fontSize: font1216,
  },
  // login Page end
  // register page start
  registerTabMenu: {
    width: "100%",
    height: width < 400 ? 40 : width < 600 ? 45 : 50,
    backgroundColor: lightWhite,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: lightWhite,
    flexDirection: "row",
  },
  alertInputText: {
    position: "absolute",
    fontSize: 11,
    right: 2,
    bottom: 2,
    color: white,
  },
  activeRegisterTabMenu: {
    height: "100%",
    flex: 1,
    borderRadius: 30,
    backgroundColor: lightBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  pasiveRegisterTbs: {
    height: "100%",
    flex: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  activeResgiterBtnText: {
    color: white,
    fontSize: font131517,
  },
  squareInput: {
    width: 50,
    height: 50,
    color: white,
    fontSize: font131517,
    textAlign: "center",
    backgroundColor: lightWhite,
    borderWidth: 1,
    borderColor: lightWhite,
  },
  timeCodePageText: {
    fontSize: font131517,
    textAlign: "center",
    color: iconColor,
  },
  // register page end
  // toolbar comp start
  toolbarMain: {
    width: "100%",
  },
  blackToolBards: {
    width: "100%",
    backgroundColor: black,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.015,

    flexDirection: "row",
    alignItems: "center",
  },
  btnTopAbleOpacity: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  btntoolbarText: {
    color: white,
    fontSize: font1216,
  },
  centerToolBarPlus: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: white,
    borderRadius: (width * 0.12) / 2,
    marginTop: -(width * 0.12),
    justifyContent: "center",
    alignItems: "center",
  },
  // toolbar comp end
  // homepage start
  mainTopView: {
    width: "100%",
    height: "100%",
    backgroundColor: white,
  },
  bottomIndexLive: {
    width: "100%",
    gap: 5,
  },
  homePageLiveBottomText: {
    color: white,
    fontSize: font131517,
    fontWeight: "500",
  },
  bannerHomePage: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homepageUserImage: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
  },
  nameHomePageBanner: {
    color: white,
    fontSize: font1216,
  },
  btnEnHomePageBanner: {
    width: width * 0.1,
    height: width * 0.12,
    alignItems: "center",
  },
  indexRightBtnAbsoluteMain: {
    position: "absolute",
    bottom: height * 0.2,
    right: width * 0.03,
    gap: width * 0.04,
  },
  btnCenterRightHomePage: {
    alignItems: "center",
    gap: 2,
  },
  textRightGenerateAbsButton: {
    color: white,
    fontSize: font911,
    fontWeight: "400",
  },
  // modal start index
  modalEnd: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000026",
  },
  modalInDetail: {
    backgroundColor: white,
    width: "100%",
    minHeight: 100,
    maxHeight: height * 0.8,
    padding: width * 0.03,
    gap: width * 0.05,
  },
  btwModalHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centerBoldHeaderModal: {
    color: black,
    fontSize: font131517,
    fontWeight: "400",
  },
  commendMainFla: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commendLeftModalMain: {
    flexDirection: "row",
    gap: width * 0.03,
  },
  nameModalSender: {
    color: black,
    fontSize: font131517,
    fontWeight: "300",
  },
  detailModalCommendText: {
    color: black,
    fontSize: font1216,
    fontWeight: "400",
  },
  messageBottomLineCommendModal: {
    width: "100%",
    padding: width * 0.01,
    backgroundColor: white,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: lightWhite,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  senderCommendModal: {
    flex: 1,
    height: width < 400 ? 35 : width < 600 ? 40 : 45,
    paddingHorizontal: width * 0.03,
    fontSize: font131517,
  },
  senderMessageCommendModalButton: {
    height: width < 400 ? 35 : width < 600 ? 40 : 45,
    width: width < 400 ? 35 : width < 600 ? 40 : 45,
    justifyContent: "center",
    alignItems: "center",
  },
  // modal end index
  // rate modal start
  rateBigIcon: {
    width: width * 0.4,
    height: width * 0.4,
  },
  starCenterRated: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: width * 0.01,
  },
  // rate modal end
  // homepage end
  // teacher profilstart
  imagesTeacherProfile: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
  },
  textNameTeacherProfil: {
    textAlign: "center",
    color: black,
    fontSize: font131517,
  },
  minimalTeacherProfil: {
    fontSize: font1216,
    color: gray,
  },
  centerStarsGenerateTeacherProfil: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  followersProfilAnother: {
    marginVertical: height * 0.01,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: width * 0.1,
  },
  numberTextGenerate: {
    fontSize: font131517,
    fontWeight: "500",
    color: black,
  },
  bottomAnotherProfile: {
    color: gray,
    fontSize: font1216,
  },
  // teacher profil end
  // topbar start
  topBarMain: {
    width: "100%",
    padding: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: gray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: white,
  },
  topBarBtn: {
    padding: height * 0.005,
  },
  topBarNameText: {
    fontSize: font131517,
    fontWeight: "600",
    color: black,
  },

  // topbar end
  // teacher page go on
  btnOrangeWhiteTeacherTop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: width * 0.02,
  },
  btnTeacherProfile: {
    flex: 1,
    height: width < 400 ? 37 : width < 600 ? 42 : 45,
    borderRadius: 30,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: lightBlack,
    shadowColor: lightBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  gradeidInDetailTeacher: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textGradiendBtnIn: {
    color: white,
    fontSize: font1216,
    fontWeight: "500",
  },
  btnVideoTouchTeacher: {
    width: width * 0.32,
    height: height * 0.23,
  },
  imagesVideo: {
    width: "100%",
    height: "100%",
  },
  videoWatch: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: lightBlack,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.03,
  },
  whiteVideoWtach: {
    width: "100%",
    height: height * 0.7,
    backgroundColor: white,
    borderRadius: 10,
  },
  textBoldGenerate: {
    fontWeight: "600",
    fontSize: font131517,
  },
  // teacher page go end
  // class page start
  cardClassMain: {
    width: "48%",
    minHeight: height * 0.28,
    borderWidth: 1,
    borderColor: lightBlack,
    backgroundColor: white,
    borderRadius: 10,
    padding: width * 0.03,
    margin: width * 0.01,
    shadowColor: lightBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignItems: "center",
  },
  imageCenter: {
    width: width * 0.15,
    height: width * 0.15,
  },
  textBoldCardClassed: {
    fontSize: font131517,
    color: black,
    fontWeight: "500",
    marginBottom: 2,
  },
  departmentBoldd: {
    fontSize: font131517,
    color: black,
  },
  departmentBolddThirdy: {
    fontSize: font1216,
    color: black,
  },
  orangeButtonCard: {
    backgroundColor: orange,
    width: "100%",
    height: height * 0.04,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  orangeButtonCardText: {
    color: white,
    fontSize: font1216,
  },
  barsImageTopBar: {
    width: width * 0.05,
    height: width * 0.05,
  },
  absMenuBarryGenerate: {
    position: "absolute",
    top: height * 0.13,
    right: width * 0.03,
    backgroundColor: "#ffffffb3",
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: gray,
    zIndex: 99,
  },
  flexiblAbsoluteGenerate: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.01,
    paddingHorizontal: width * 0.03,
  },
  textAbsoluteMenu: {
    fontSize: font1216,
    color: black,
  },
  btnAbsTeacherLectureCard: {
    width: 30,
    height: 30,
    backgroundColor: orange,
    position: "absolute",
    right: width * 0.03,
    top: width * 0.03,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCenterAddLecture: {
    width: width * 0.5,
    justifyContent: "center",
    alignItems: "center",
    gap: width * 0.03,
  },
  bigOrangePlus: {
    width: width * 0.14,
    height: width * 0.14,
    backgroundColor: orange,
    borderRadius: width * 0.07,
    justifyContent: "center",
    alignItems: "center",
  },
  centerPlusTeacherText: {
    color: black,
    fontSize: font131517,
  },
  // class page end
  // homework page start
  textNameHeaderHw: {
    fontSize: font131517,
    color: black,
    fontWeight: "500",
  },
  pdfCardMain: {
    width: "100%",
    height: height * 0.25,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 20,
    padding: width * 0.03,
    alignItems: "center",
    gap: width * 0.02,
  },
  iamgesPdgCenterState: {
    width: "100%",
    height: "60%",
  },
  textDetailExpPdf: {
    fontSize: font1216,
    color: black,
  },
  downloddPdfButton: {
    width: width * 0.08,
    height: width * 0.08,
    position: "absolute",
    right: width * 0.01,
    top: width * 0.01,
    borderRadius: width * 0.04,
    backgroundColor: iconColor,
    justifyContent: "center",
    alignItems: "center",
  },
  // homework page end
  // succsess page start
  avatarTopSuccessPage: {
    width: "100%",
    flexDirection: "row",
  },
  avatarGenerateTops: {
    flex: 1,
    alignItems: "center",
    paddingTop: 35,
  },
  avatarImagescroolsPage: {
    width: "50%",
    height: 70,
  },
  avatarNameSc: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: font1216,
    fontWeight: "400",
  },
  successList: {
    width: "100%",
    height: width < 400 ? 40 : width < 600 ? 45 : 50,
    backgroundColor: white,
    paddingHorizontal: width * 0.03,
    borderRadius: 10,
    marginTop: height * 0.012,
    borderWidth: 1,
    borderColor: lightBlack,
    shadowColor: lightBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // succsess page end
  // message detail page start
  messageTopDetail: {
    width: "100%",
    padding: width * 0.03,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: iconColor,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  goBackButtonArrow: {
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: "center",
  },
  MessageDetailImage: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    borderWidth: 1,
    borderColor: offline,
  },
  absloteAbootOnlineStatur: {
    width: 14,
    height: 14,
    borderRadius: 7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: offline,
  },
  textMessageDetailName: {
    fontSize: font131517,
    color: black,
    marginLeft: width * 0.02,
  },
  emmptyMessageText: {
    textAlign: "center",
    fontSize: font131517,
    color: black,
  },
  senderMainMs: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  receiveMainMs: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  messageBallSender: {
    minWidth: 10,
    maxWidth: "70%",
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#FFF2E4",
    padding: 15,
    borderWidth: 1,
    borderColor: white,
  },
  messageBallReceive: {
    minWidth: 10,
    maxWidth: "70%",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#fff",
    padding: 15,
    borderWidth: 1,
    borderColor: orange,
  },
  textMessageDetail: {
    color: black,
    fontSize: font1216,
  },
  messageBottomSender: {
    width: "100%",
    padding: width * 0.01,
    flexDirection: "row",
    backgroundColor: mainColor,
    borderRadius: 30,
  },
  cameraButtonMessage: {
    backgroundColor: orange,
    width: height * 0.05,
    height: height * 0.05,
    borderRadius: height * 0.025,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButtonMessageSecond: {
    width: height * 0.05,
    height: height * 0.05,
    borderRadius: height * 0.025,
    justifyContent: "center",
    alignItems: "center",
  },
  messageInput: {
    flex: 1,
    height: height * 0.05,
    paddingHorizontal: width * 0.03,
  },
  // message detail page
  // quizDetail start
  textDetailQuizesDetail: {
    color: black,
    fontSize: font131517,
  },
  generateAllQuestionDetail: {
    width: "100%",
    flexDirection: "row",
    gap: width * 0.03,
  },
  btnOrangeDetailQuizses: {
    flex: 1,
    height: width < 400 ? 37 : width < 600 ? 40 : 45,
    backgroundColor: orange,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnOrangeDetailQuizsesText: {
    color: white,
    fontSize: font131517,
  },
  questionCardIn: {
    width: "100%",
    height: height * 0.6,
    backgroundColor: white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: gray,
    shadowColor: iconColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    padding: width * 0.03,
  },
  buttonAndTextQuestionPage: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textCenterQuestions: {
    color: gray,
    fontSize: font131517,
  },
  orangeButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: orange,
    borderRadius: 30,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  pasiveButtoQuestions: {
    width: 40,
    height: 40,
    backgroundColor: orange,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ansversWhite: {
    color: white,
    fontSize: font131517,
    fontWeight: "600",
  },
  pasieButtonTem: {
    color: black,
    fontSize: font1216,
  },
  // quizDetail end
  // notificationPageStart
  cardNotification: {
    width: "100%",
    padding: width * 0.03,
    gap: width * 0.01,
    borderWidth: 1,
    borderColor: gray,
    backgroundColor: white,
    shadowColor: iconColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  notificationHeader: {
    fontSize: font131517,
    color: black,
    fontWeight: "500",
  },
  textNorificationGenerateDetail: {
    color: black,
    fontSize: font1216,
  },
  dataNotificationGenerate: {
    color: gray,
    fontSize: font1216,
  },
  centerNotNotification: {
    textAlign: "center",
    marginTop: width * 0.03,
    color: black,
    fontSize: font131517,
  },
  // notificationPage End
  // message main start
  imageGenerate: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.07,
    borderWidth: 1,
    borderColor: offline,
  },
  textCenterMessage: {
    textAlign: "center",
    color: black,
    fontSize: font1216,
  },
  // message main end
  // add lecture start
  addLectureTextAndInput: {
    width: "100%",
    gap: 2,
  },
  nameInputTopText: {
    color: black,
    fontSize: font131517,
  },
  inputAddLecture: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#dadada",
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    fontSize: font131517,
  },
  selectCardChoose: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#dadada",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    paddingBottom: 5,
  },
  inputAddLectureArea: {
    width: "100%",
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#dadada",
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    fontSize: font131517,
    textAlignVertical: "top",
  },
  btnOrangeAddClass: {
    width: "70%",
    height: 45,
    backgroundColor: orange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  whiteTextForOrangeButton70: {
    fontSize: font131517,
    color: white,
  },
  // add lecture end
  // add homework page start
  addInputUploadHomeWork: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5",
    borderColor: "#dadada",
    fontSize: font131517,
    borderRadius: 5,
  },
  btnCenterPlusAddLecture: {
    width: "50%",
    height: height * 0.25,
    borderWidth: 1,
    backgroundColor: "#f5f5f5",
    borderColor: "#dadada",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButtonCenters: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: "gray",
    borderRadius: width * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
  // add homework page end
  // quiz page start
  quizMainCardGenerate: {
    width: "100%",
    minHeight: height * 0.7,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dadada",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  headerCardQuisesCard: {
    width: "100%",
    minHeight: 50,
    backgroundColor: white,
  },
  headerCardQuisesCardFirst: {
    width: "100%",
    backgroundColor: "#dadada",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
  },
  headerCardQuisesCardFirstText: {
    fontSize: font1216,
    color: black,
    fontWeight: "300",
  },
  inputAddQuizses: {
    width: "100%",
    minHeight: 100,
    padding: 10,
    textAlignVertical: "top",
  },
  chooseAnsVersınput: {
    width: "100%",
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
    flexDirection: "row",
  },
  leftWordButton: {
    height: "100%",
    padding: 15,
    borderRightWidth: 1,
    borderRightColor: "#dadada",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBottomAddQuizes: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 15,
  },
  // quiz page end
  // live teacher page start
  livePageBottomToolbar: {
    padding: width * 0.03,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPaddingLiveToolbar: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteTextGenerate: {
    color: white,
    fontSize: font1216,
  },
  livePageDetail: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    padding: width * 0.03,
    justifyContent: "space-between",
  },
  livePageTopMain: {
    width: "100%",
    gap: width * 0.03,
  },
  timeTopLivePage: {
    width: "100%",
    height: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#dadada",
  },
  arrowLivePage: {
    backgroundColor: lightWhite,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bottomRecoredLive: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  centerButtonLiveFlexible: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFlexibleIcons: {
    alignItems: "center",
  },
  iconTextLivePage: {
    color: white,
    fontSize: font1216,
  },
  buttonLivePageSave: {
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: lightWhite,
    borderRadius: width * 0.1,
    padding: 7,
  },
  buttonLivePageSaveInReal: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: white,
    borderWidth: 1,
    borderColor: "#dadada",
  },
  orangeButtonShare: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: orange,
    borderRadius: 30,
  },
  inpuGraysShared: {
    width: "100%",
    fontSize: font131517,
    color: white,
    borderRadius: 10,
    minHeight: 100,
    backgroundColor: lightWhite,
    padding: 15,
    textAlignVertical: "top",
  },
  // live teacher page end
  // profil teacher edit starta
  buttonEditsTeacherButton: {
    width: "50%",
    height: 40,
    backgroundColor: white,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textbuttonEditsTeacherButton: {
    color: black,
    fontSize: font1216,
    textAlign: "center",
  },
  // profil teacher edit ends
  // edit profile start
  textHeaderNameEditProfile: {
    fontSize: font131517,
    fontWeight: "400",
    color: black,
  },
  editProfileImageTops: {
    width: width * 0.24,
    height: width * 0.24,
    borderRadius: width * 0.12,
  },
  editProfileImageTopsCircle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: offline,
  },
  editProfileImageTopsCircleAbs: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: "#00000045",
    position: "absolute",
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  inputEditPage: {
    width: "100%",
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: iconColor,
    fontSize: font131517,
  },
  orangeButtonBge: {
    minWidth: "50%",
    height: 50,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: orange,
    borderRadius: 10,
  },
  orangeButtonBgeText: {
    color: white,
    fontSize: font131517,
  },
  // edit profile end
  // settin pAGE
  buttonSeetingPage: {
    width: "100%",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boldTextButton: {
    color: black,
    fontSize: font1216,
  },
  // settin pAGE ENDs
  // notification setting Page start
  notificationSettingMain: {
    width: "100%",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: iconColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  swichedManuel: {
    width: 45,
    height: 25,
    backgroundColor: white,
    borderWidth: 1,
    borderRadius: 30,
  },
  leftMainSwiched: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#dadada",
    backgroundColor: white,
  },
  leftMainSwichedCircle: {
    width: 18,
    height: 18,
    backgroundColor: orange,
    borderRadius: 100,
  },
  // notification setting Page end
  // creater Detailsetting Page start
  headerTextHead: {
    fontSize: font1216,
    color: black,
    fontWeight: "600",
  },
  cardPacketTeacher: {
    flex: 1,
    height: 120,
    borderWidth: 1,
    backgroundColor: white,
    borderRadius: 10,
    borderColor: iconColor,
    padding: 10,
    justifyContent: "space-between",
  },
  fontTextCardPacket: {
    fontWeight: "600",
    fontSize: font1216,
    color: black,
  },
  textSecondPackedDetail: {
    color: black,
    fontSize: 13,
  },
  lineShareGenerate: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: iconColor,
    backgroundColor: white,
    borderRadius: 20,
    shadowColor: iconColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  priceCardGenerate: {
    width: "100%",
    padding: 20,
    backgroundColor: iconColor,
    shadowColor: iconColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginTop: width * 0.03,
    borderRadius: 10,
    gap: 10,
  },
  boldTextPrice: {
    fontWeight: "700",
    fontSize: font1820,
  },
  textDetailBottomTeaacherCard: {
    fontSize: font131517,
    color: black,
  },
  // creater Detailsetting Page end
  // avar main page start
  avatartBannerTops: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: width * 0.03,
  },
  orangeButtonsAvatarMain: {
    paddingHorizontal: width * 0.08,
    paddingVertical: 10,
    backgroundColor: orange,
    borderRadius: 30,
  },
  textWhiteColorButtonAvatar: {
    color: white,
    fontSize: font131517,
  },
  headerTopModaAvatarPage: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: iconColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBackAndNextAvatarPage: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  allItemsButtonBottom: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: iconColor,
    shadowColor: iconColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    flexDirection: "row",
  },
  buttonClickeBottom: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imagesCenterButton: {
    width: "80%",
    height: "80%",
  },
  // avar main page end
  // choose categories start
  viewTopChooseCategories: {
    width: "100%",
    padding: width * 0.03,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 0,
    paddingTop: 0,
  },
  buttonClickedCooseCategories: {
    width: "50%",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: orange,
  },
  cardCheckedNews: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activeClicked: {
    width: 35,
    height: 35,
    backgroundColor: orange,
    justifyContent: "center",
    alignItems: "center",
  },
  pasiveClicked: {
    width: 35,
    height: 35,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dadada",
  },
  // choose categories end
  // upload homeWork start
  buttonCenterPlusOrange: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: orange,
    borderRadius: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  // upload homeWork end
  // stundet profile page start
  activeStudentTab: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: orange,
  },
  pasiveStudentTab: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  // stundet profile page end
});

export default styles;
