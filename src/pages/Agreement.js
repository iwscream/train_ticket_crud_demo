import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SignIn from "./SignIn";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link, TextField, Typography} from "@material-ui/core";

const agreement_text3 = "欢迎您访问12306网！12306提醒您：12306网是铁路服务客户的重要窗口，由中国铁道科学研究院集团有限公司运营，总部位于北京市海淀区。本隐私政策与您在12306网使用12306的产品或服务（以下统称为“服务”）息息相关，请您在使用服务前仔细阅读并确认您已经充分理解和同意本隐私政策，尤其是加粗或下划线的内容。\n" +
    "12306深知个人隐私的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最小必要原则、确保安全原则、主体参与原则、公开透明原则等。我们也将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。我们在您使用12306网的过程中所收集到的个人信息将只用于本《隐私政策》中所规定的用途。";

const agreement_text2 = "本隐私政策内容适用于中国铁路客户服务中心（“我们”）http://www.12306.cn网站、网站的网页端、移动客户端（包括iOS、安卓及已有或未来将新增的任何其他移动客户端）及其他由我们提供的功能与服务（以下统称“12306网”或“12306”）。";
const agreement_title2 = "隐私权政策";

const useStyle = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(10),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}))

export default function Agreement() {
    const classes = useStyle();

    return (
        <Grid item xs={10}>
            <Paper className={classes.paper}>
                <Typography variant="h2" gutterBottom>
                    {agreement_title2}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {agreement_text2}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {agreement_text3}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <Link href="https://kyfw.12306.cn/otn/gonggao/privacyPolicy_web.html;jsessionid=E2FF56F8BC8EC329272B085E13FE35CA" defaultValue="详细信息参考">
                        详细信息参考
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}