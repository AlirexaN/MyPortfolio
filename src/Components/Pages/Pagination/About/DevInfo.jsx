import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

const DevInfo = () => {
    return (
        <Typography
            sx={{
                lineHeight: 2,
                fontSize: "1.7rem",
                fontFamily: "Leila,rockinsoda",
                letterSpacing: "1px"
            }}>
            <KeyboardArrowLeftRounded
                sx={{
                    color: "#21e6c1",
                    mr: 1,
                    position: "relative",
                    top: "10px"
                }}
            />
            من، علیرضا هستم؛ در توسعه وب‌سایت‌های واکنش‌گرا و بهینه‌سازی تجربه
            کاربری تخصص دارم. مسلط به HTML، CSS، JavaScript و فریمورک محبوبی چون
            React هستم. توانایی حل مسئله و پیاده‌سازی طراحی‌های پیچیده رو در
            پروژه‌های تیمی و فردی دارم.به نوآوری و یادگیری مداوم علاقه‌مندم و
            همیشه در جستجوی روش‌های جدید برای بهبود عملکرد و ظاهر وب‌سایت‌ها هم
            هستم. مهارت‌های ارتباطی بالایی در تعامل با تیم‌های طراحان و بک‌اند
            دارم.
        </Typography>
    );
};

export default DevInfo;
