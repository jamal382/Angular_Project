# Fetch all branches from the remote repository
git fetch --all

# List all remote branches
git branch -r

# Check out and track each remote branch
for remote_branch in $(git branch -r | grep -v '\->'); do
  local_branch=$(echo "$remote_branch" | sed 's/^origin\///')
  git checkout -b "$local_branch" "$remote_branch"
done

