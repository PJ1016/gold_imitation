import {
  Typography,
  Box,
  Avatar,
  CircularProgress,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import { useState, useEffect } from "react";
import { ShoppingCart } from "@mui/icons-material";
import { NAV_STYLES } from "./styles";
import type { UserData } from ".";
import { useAppSelector } from "../../store/store";
import { selectCartItemsCount } from "../../store/slices/jewelleryCardSlice";

export const UserSection: React.FC<{
  user: UserData | null;
  loading: boolean;
  error: string | null;
  handleLogout: () => void;
}> = ({ user, loading, error, handleLogout }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const cartCount = useAppSelector(selectCartItemsCount);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (user?.picture) {
      const img = new Image();
      img.src = user.picture;
      img.onerror = () => setImgError(true);
      img.onload = () => setImgError(false);
    }
  }, [user?.picture]);

  if (user) {
    return (
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: "1rem", display: { xs: "none", sm: "block" } }}
        >
          Welcome, {user.name}
        </Typography>
        <Badge badgeContent={cartCount} color="success" max={9}>
          <ShoppingCart />
        </Badge>
        <Box sx={{ position: "relative" }}>
          <Avatar
            alt={user.name}
            src={
              imgError ? undefined : `${user.picture}?${new Date().getTime()}`
            }
            key={user.picture}
            sx={{
              ...NAV_STYLES.avatar,
              opacity: imageLoading ? 0.5 : 1,
            }}
            component="button"
            onClick={handleClick}
            onLoad={() => setImageLoading(false)}
            onLoadStart={() => setImageLoading(true)}
          >
            {imgError && user.name.charAt(0)}
          </Avatar>

          {imageLoading && (
            <CircularProgress
              size={20}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-10px",
                marginLeft: "-10px",
              }}
            />
          )}
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    );
  }

  return (
    <>
      {loading ? (
        <CircularProgress color="inherit" size={24} />
      ) : (
        <div id="google-signin-button" />
      )}
      {error && (
        <Typography color="error" sx={{ marginLeft: "1rem" }}>
          {error}
        </Typography>
      )}
    </>
  );
};
