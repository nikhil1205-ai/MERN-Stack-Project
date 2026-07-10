import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const PostCard = ({ post, onEdit, onDelete }) => {
  const author = post.user || {};

  return (
    <article className="glass-panel rounded-[2rem] p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 text-xl font-semibold text-white shadow-lg shadow-sky-200/40">
            {author.name?.charAt(0) || 'U'}
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">{author.name || 'Unknown'}</p>
            <p className="text-sm text-slate-500">@{author.username || 'user'}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <button
            type="button"
            onClick={() => onEdit(post)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-sky-500"
          >
            <EditOutlinedIcon className="h-5 w-5 text-slate-600" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(post)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-rose-600 transition hover:bg-rose-100"
          >
            <DeleteOutlineOutlinedIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <p className="mt-5 text-slate-800">{post.caption}</p>
      {post.image ? (
        <img className="mt-5 max-h-[360px] w-full rounded-[2rem] object-cover" src={post.image} alt="post" />
      ) : null}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
        <div className="flex items-center gap-2 text-slate-500">
          <FavoriteBorderOutlinedIcon className="h-5 w-5" />
          <span>0 likes</span>
        </div>
        <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">{new Date(post.createdAt).toLocaleString()}</span>
      </div>
    </article>
  );
};

export default PostCard;
